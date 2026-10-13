import cloudinary from "../config/cloudnaydb.js";
import Project from "../models/project.model.js";
import { UploadCloudinary } from "../utils/cloudinary.js";


export async function createProject(req, res) {
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

    const cleanSlug = slug.trim().toLowerCase();

    const existingProject = await Project.findOne({
      slug: cleanSlug,
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

      slug: cleanSlug,

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

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Project with this slug already exists",
        error: "Duplicate slug error",
      });
    }

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(", "),
        error: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: error.message || "PROJECT FAILED TO CREATE",
      error: error.message,
    });
  }
}


export async function getProjects(req, res) {
  try {
    const data = await Project.find().sort({ createdAt: 1 });
    return res.status(200).json({
      message: 'ALL PROJECT DATA RECEIVED',
      success: true,
      data: data
    });

  } catch (error) {
    return res.status(500).json({
      message: 'FAILED TO RECEIVE PROJECT DATA',
      success: false,
      error: error.message,
    });
  }
}


export async function deleteProject(req, res) {
  try {
    const { id } = req.params;

    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({
        message: 'not found',
        success: false,
      });
    }

    // Delete image from Cloudinary
    if (project.image?.publicId) {
      try {
        await cloudinary.uploader.destroy(project.image.publicId);
      } catch (error) {
        console.error("Cloudinary Delete Error:", error);
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

export async function getProjectById(req, res) {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Project retrieved successfully",
      data: project,
    });
  } catch (error) {
    console.error("getProjectById Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error: Failed to retrieve project",
    });
  }
}

export async function updateProject(req, res) {
  try {
    const { id } = req.params;
    let project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // Check duplicate slug if changing slug
    if (req.body.slug && req.body.slug.trim().toLowerCase() !== project.slug.toLowerCase()) {
      const duplicateSlug = await Project.findOne({
        slug: req.body.slug.trim().toLowerCase(),
        _id: { $ne: id },
      });
      if (duplicateSlug) {
        return res.status(409).json({
          success: false,
          message: "Project with this slug already exists",
        });
      }
    }

    // Handle optional image upload on update
    let updatedImageData = project.image;
    if (req.file) {
      // Destroy old image
      if (project.image?.publicId) {
        try {
          await cloudinary.uploader.destroy(project.image.publicId);
        } catch (err) {
          console.error("Cloudinary Delete Old Image Error:", err);
        }
      }
      
      // Upload new image
      const uploadImage = await UploadCloudinary(req.file.buffer, "projects");
      if (uploadImage?.secure_url) {
        updatedImageData = {
          url: uploadImage.secure_url,
          publicId: uploadImage.public_id,
          alt: req.body.imageAlt?.trim() || project.title,
        };
      }
    } else if (req.body.imageAlt !== undefined) {
      updatedImageData = {
        ...project.image,
        alt: req.body.imageAlt.trim() || project.title,
      };
    }

    // Process other fields similarly to createProject
    let parsedLinks = project.links;
    let parsedTechnologies = project.technologies;
    
    if (req.body.links) {
      try { parsedLinks = JSON.parse(req.body.links); } catch(e){}
    }
    if (req.body.technologies) {
      try { parsedTechnologies = JSON.parse(req.body.technologies); } catch(e){}
    }

    const updatedData = {
      title: req.body.title?.trim() || project.title,
      slug: req.body.slug?.trim() || project.slug,
      tagline: req.body.tagline?.trim() || project.tagline,
      description: req.body.description?.trim() || project.description,
      image: updatedImageData,
      links: parsedLinks,
      technologies: parsedTechnologies,
      featured: req.body.featured !== undefined ? (req.body.featured === true || req.body.featured === "true") : project.featured,
      order: req.body.order !== undefined ? Number(req.body.order) : project.order,
    };

    project = await Project.findByIdAndUpdate(id, updatedData, { returnDocument: 'after', new: true, runValidators: true });

    return res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: project,
    });
  } catch (error) {
    console.error("updateProject Error:", error);

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Project with this slug already exists",
        error: "Duplicate slug error",
      });
    }

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(", "),
        error: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: error.message || "Server Error: Failed to update project",
      error: error.message,
    });
  }
}