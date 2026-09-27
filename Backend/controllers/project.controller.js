import cloudinary from "../config/cloudnaydb.js";
import Project from "../models/project.model.js";
import { UploadCloudinary } from "../utils/cloudinary.js";


export async function PostProject(req, res) {
  try {
    const {
      title,
      slug,
      tagline,
      description,
      links,
      technologies,
      featured,
      order,
      imageAlt,
    } = req.body;

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    // --------------------------------
    // Parse FormData JSON fields
    // --------------------------------

    let parsedLinks = {};
    let parsedTechnologies = [];

    try {
      parsedLinks = links ? JSON.parse(links) : {};

      parsedTechnologies = technologies
        ? JSON.parse(technologies)
        : [];
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "Invalid links or technologies format",
      });
    }

    // --------------------------------
    // Validate parsed data
    // --------------------------------

    if (
      !parsedLinks ||
      typeof parsedLinks !== "object" ||
      Array.isArray(parsedLinks)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid links format",
      });
    }

    if (!Array.isArray(parsedTechnologies)) {
      return res.status(400).json({
        success: false,
        message: "Technologies must be an array",
      });
    }

    // --------------------------------
    // Required field validation
    // --------------------------------

    if (!title?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Project title is required",
      });
    }

    if (!slug?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Project slug is required",
      });
    }

    if (!description?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Project description is required",
      });
    }

    if (parsedTechnologies.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one technology is required",
      });
    }

    // --------------------------------
    // Image validation
    // --------------------------------

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Project image is required",
      });
    }

    // --------------------------------
    // Check duplicate slug
    // --------------------------------

    const existingProject = await Project.findOne({
      slug: slug.trim(),
    });

    if (existingProject) {
      return res.status(409).json({
        success: false,
        message: "Project with this slug already exists",
      });
    }

    // --------------------------------
    // Upload image to Cloudinary
    // --------------------------------

    const uploadImage = await UploadCloudinary(
      req.file.buffer,
      "projects"
    );

    console.log("CLOUDINARY RESPONSE:", uploadImage);

    if (!uploadImage?.secure_url || !uploadImage?.public_id) {
      return res.status(500).json({
        success: false,
        message: "Project image upload failed",
      });
    }



    // --------------------------------
    // Create project
    // --------------------------------

    const project = await Project.create({
      title: title.trim(),

      slug: slug.trim(),

      tagline: tagline?.trim() || "",

      description: description.trim(),

      image: {
        url: uploadImage.secure_url,
        publicId: uploadImage.public_id,
        alt: imageAlt?.trim() || title.trim(),
      },

      links: {
        live: parsedLinks.live?.trim() || "",
        github: parsedLinks.github?.trim() || "",
      },

      technologies: parsedTechnologies,

      featured:
        featured === true ||
        featured === "true",

      order: Number.isNaN(Number(order))
        ? 0
        : Number(order),
    });

    // --------------------------------
    // Success response
    // --------------------------------

    return res.status(201).json({
      success: true,
      message: "PROJECT CREATED SUCCESSFULLY",
      data: project,
    });
  } catch (error) {
    console.error("PostProject Error:", error);

    return res.status(500).json({
      success: false,
      message: "PROJECT FAILED TO CREATE",
      error: error.message,
    });
  }
}



export async function GetProjects(req, res) {
    try {
        const data = await Project.find().sort({createdAt: -1});
        return res.status(201).json({
            message: 'ALL PROJECT DATA RECEIVE',
            success: false,
            data: data
        })

    } catch (error) {
        return res.status(201).json({
            message: 'ALL PROJECT DATA RECEIVE',
            success: false,
        })
    }    
}


export async function DeleteProject(req, res) {
  try {
    const {id} = await req.params;

  const project = await Project.findById(id);

  if(!project){
    return res.status(404).json({
      message: 'not found',
      success: false,
    });
  }

  //delete image from cloudnary
  if(project.image?.publicId){
    try {
      await cloudinary.uploader.destroy(
        project.image.public_id,
      {
        secure_url: "image"
      }
    );
    } catch (error) {
      console.error("Clooudinar Delete Error");

    }
  }

  await Project.findByIdAndDelete(id);

   return res.status(200).json({
      success: true,
      message: "PROJECT DELETED SUCCESSFULLY",
    });
  } catch (error) {
    console.error("DeleteProject Error:", error);

    return res.status(500).json({
      success: false,
      message: "PROJECT FAILED TO DELETE",
      error: error.message,
    });
  }
  
}