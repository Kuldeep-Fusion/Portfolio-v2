import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Project title is required"],
            trim: true,
            maxlength: [100, "Title cannot exceed 100 characters"],
        },
        slug: {
            type: String,
            required: [true, "Project slug is required"],
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        tagline: {
            type: String,
            trim: true,
            maxlength: [150, "Tagline cannot exceed 150 characters"],
        },
        description: {
            type: String,
            required: [true, "Project description is required"],
        },
        image: {
            url: {
                type: String,
                required: [true, "Project image URL is required"],
            },
            publicId: {
                type: String, // Cloudinary/S3 image management
            },
            alt: {
                type: String,
                default: "Project screenshot",
            },
        },
        links: {
            live: { type: String, trim: true },
            github: { type: String, trim: true },
        },
        
        technologies: {
            type: [String],
            required: true,
        },

        featured: {
            type: Boolean,
            default: false,
            index: true,
        },
        order: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;