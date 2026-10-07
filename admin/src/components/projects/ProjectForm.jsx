
import { useState } from "react";
import { postProject } from "../../services/api";

import {
  ImageIcon,
  LinkIcon,
  GithubIcon,
  PlusIcon,
  XIcon,
  SaveIcon,
} from "@animateicons/react/lucide";

const ProjectForm = ({ project, setProject }) => {
  const [technology, setTechnology] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProject((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const addTechnology = () => {
    const value = technology.trim();

    if (!value) return;

    if (project.technologies.includes(value)) {
      setTechnology("");
      return;
    }

    setProject((prev) => ({
      ...prev,
      technologies: [...prev.technologies, value],
    }));

    setTechnology("");
  };

  const removeTechnology = (tech) => {
    setProject((prev) => ({
      ...prev,
      technologies: prev.technologies.filter(
        (item) => item !== tech
      ),
    }));
  };

  const handleTechnologyKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTechnology();
    }
  };

  // =========================================
  // IMAGE
  // =========================================

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Validate image type
    const allowedTypes = [
      "image/png",
      "image/jpeg",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Only PNG, JPG or WEBP images are allowed.");
      return;
    }

    // Validate image size - 5MB
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be less than 5MB.");
      return;
    }

    const previewUrl = URL.createObjectURL(file);

    setProject((prev) => ({
      ...prev,
      image: {
        file,
        preview: previewUrl,
      },
    }));
  };

  // =========================================
  // SUBMIT
  // =========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate submit
    if (loading) return;

    // =========================================
    // FRONTEND VALIDATION
    // =========================================

    if (!project.title?.trim()) {
      alert("Project title is required.");
      return;
    }

    if (!project.slug?.trim()) {
      alert("Project slug is required.");
      return;
    }

    if (!project.description?.trim()) {
      alert("Project description is required.");
      return;
    }

    if (
      !Array.isArray(project.technologies) ||
      project.technologies.length === 0
    ) {
      alert("Please add at least one technology.");
      return;
    }

    if (!project.image?.file) {
      alert("Please select a project image.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      // =========================================
      // BASIC INFORMATION
      // =========================================

      formData.append(
        "title",
        project.title.trim()
      );

      formData.append(
        "slug",
        project.slug.trim()
      );

      formData.append(
        "tagline",
        project.tagline?.trim() || ""
      );

      formData.append(
        "description",
        project.description.trim()
      );

      // =========================================
      // LINKS
      // =========================================

      formData.append(
        "links",
        JSON.stringify({
          live: project.links?.live?.trim() || "",
          github: project.links?.github?.trim() || "",
        })
      );

      // =========================================
      // TECHNOLOGIES
      // =========================================

      formData.append(
        "technologies",
        JSON.stringify(project.technologies)
      );

      // =========================================
      // SETTINGS
      // =========================================

      formData.append(
        "featured",
        String(Boolean(project.featured))
      );

      formData.append(
        "order",
        String(Number(project.order) || 0)
      );

      // =========================================
      // IMAGE ALT
      // =========================================

      formData.append(
        "imageAlt",
        project.imageAlt?.trim() || ""
      );

      // =========================================
      // IMAGE FILE
      // IMPORTANT:
      // project.image = { file, preview }
      // Backend needs the actual File
      // =========================================

      formData.append(
        "image",
        project.image.file
      );

      // =========================================
      // DEBUG FORMDATA
      // =========================================

      console.log(
        "========== PROJECT FORM DATA =========="
      );

      for (const [key, value] of formData.entries()) {
        if (value instanceof File) {
          console.log(key, {
            name: value.name,
            type: value.type,
            size: value.size,
          });
        } else {
          console.log(key, value);
        }
      }

      console.log(
        "======================================="
      );

      // =========================================
      // API REQUEST
      // =========================================

      const result = await postProject(formData);

      console.log(
        "Project Created:",
        result
      );

      alert("Project created successfully!");

      // Optional reset
      setProject({
        title: "",
        slug: "",
        tagline: "",
        description: "",
        links: {
          live: "",
          github: "",
        },
        technologies: [],
        featured: false,
        order: 0,
        imageAlt: "",
        image: {
          file: null,
          preview: "",
        },
      });

      setTechnology("");
    } catch (error) {
      console.error(
        "Failed to create project:",
        error
      );

      alert(
        error?.response?.data?.message ||
          "Failed to create project."
      );
    } finally {
      setLoading(false);
    }
  };




  // =========================================
  // UI
  // =========================================


  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* =====================================
          BASIC INFORMATION
      ===================================== */}

      <div className="rounded-2xl border border-white/10 bg-[#0d120d] p-5 sm:p-6">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9CFF00]">
            01 / Information
          </p>

          <h2 className="mt-2 text-lg font-semibold text-white">
            Basic Information
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Add the basic details of your project.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* TITLE */}

          <div>
            <label className="admin-label">
              Project Title
            </label>

            <input
              type="text"
              name="title"
              value={project.title}
              onChange={handleChange}
              placeholder="Portfolio Website"
              className="mt-2 w-full rounded-xl border border-white/20 bg-transparent p-2 text-white outline-none"
              required
            />
          </div>

          {/* SLUG */}

          <div>
            <label className="admin-label">
              Slug
            </label>

            <input
              type="text"
              name="slug"
              value={project.slug}
              onChange={handleChange}
              placeholder="portfolio-website"
              className="mt-2 w-full rounded-xl border border-white/20 bg-transparent p-2 text-white outline-none"
              required
            />
          </div>

          {/* TAGLINE */}

          <div className="md:col-span-2">
            <label className="admin-label">
              Tagline
            </label>

            <input
              type="text"
              name="tagline"
              value={project.tagline}
              onChange={handleChange}
              placeholder="A sleek modern portfolio built with Next.js..."
              className="mt-2 w-full rounded-xl border border-white/20 bg-transparent p-2 text-white outline-none"
            />
          </div>

          {/* DESCRIPTION */}

          <div className="md:col-span-2">
            <label className="admin-label">
              Description
            </label>

            <textarea
              name="description"
              value={project.description}
              onChange={handleChange}
              rows={6}
              placeholder="Describe your project..."
              className="mt-2 w-full resize-none rounded-xl border border-white/20 bg-transparent p-2 text-white outline-none"
              required
            />
          </div>
        </div>
      </div>

      {/* =====================================
          TECHNOLOGIES
      ===================================== */}

      <div className="rounded-2xl border border-white/10 bg-[#0d120d] p-5 sm:p-6">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9CFF00]">
            02 / Stack
          </p>

          <h2 className="mt-2 text-lg font-semibold text-white">
            Technologies
          </h2>
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            value={technology}
            onChange={(e) =>
              setTechnology(e.target.value)
            }
            onKeyDown={handleTechnologyKeyDown}
            placeholder="React"
            className="admin-input flex-1"
          />

          <button
            type="button"
            onClick={addTechnology}
            className="flex items-center gap-2 rounded-xl bg-[#9CFF00] px-4 py-2.5 text-sm font-semibold text-black transition hover:brightness-110"
          >
            <PlusIcon size={16} />
            Add
          </button>
        </div>

        {project.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-2 rounded-lg border border-[#9CFF00]/20 bg-[#9CFF00]/5 px-3 py-1.5 text-sm text-[#9CFF00]"
              >
                {tech}

                <button
                  type="button"
                  onClick={() =>
                    removeTechnology(tech)
                  }
                  className="transition hover:text-white"
                >
                  <XIcon size={13} />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* =====================================
          LINKS
      ===================================== */}

      <div className="rounded-2xl border border-white/10 bg-[#0d120d] p-5 sm:p-6">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9CFF00]">
            03 / Links
          </p>

          <h2 className="mt-2 text-lg font-semibold text-white">
            Project Links
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* LIVE */}

          <div>
            <label className="admin-label flex items-center gap-2">
              <LinkIcon size={14} />
              Live URL
            </label>

            <input
              type="url"
              value={project.links?.live || ""}
              onChange={(e) =>
                setProject((prev) => ({
                  ...prev,
                  links: {
                    ...prev.links,
                    live: e.target.value,
                  },
                }))
              }
              placeholder="https://example.com"
              className="admin-input"
            />
          </div>

          {/* GITHUB */}

          <div>
            <label className="admin-label flex items-center gap-2">
              <GithubIcon size={14} />
              GitHub URL
            </label>

            <input
              type="url"
              value={project.links?.github || ""}
              onChange={(e) =>
                setProject((prev) => ({
                  ...prev,
                  links: {
                    ...prev.links,
                    github: e.target.value,
                  },
                }))
              }
              placeholder="https://github.com/username/project"
              className="admin-input"
            />
          </div>
        </div>
      </div>

      {/* =====================================
          IMAGE
      ===================================== */}

      <div className="rounded-2xl border border-white/10 bg-[#0d120d] p-5 sm:p-6">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9CFF00]">
            04 / Media
          </p>

          <h2 className="mt-2 text-lg font-semibold text-white">
            Project Image
          </h2>
        </div>

        <label className="flex min-h-48 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/15 bg-black/10 p-6 text-center transition hover:border-[#9CFF00]/40">
          {project.image?.preview ? (
            <img
              src={project.image.preview}
              alt="Project preview"
              className="mb-4 max-h-48 rounded-lg object-contain"
            />
          ) : (
            <ImageIcon
              size={32}
              className="mb-3 text-gray-500"
            />
          )}

          <span className="text-sm font-medium text-gray-300">
            {project.image?.file?.name ||
              "Click to upload image"}
          </span>

          <span className="mt-1 text-xs text-gray-600">
            PNG, JPG or WEBP — Max 5MB
          </span>

          <input
            type="file"
            accept="image/png,image/jpeg,image/webp"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>

        {/* ALT */}

        <div className="mt-5">
          <label className="admin-label">
            Image Alt Text
          </label>

          <input
            type="text"
            name="imageAlt"
            value={project.imageAlt || ""}
            onChange={handleChange}
            placeholder="Portfolio Website Homepage Screenshot"
            className="admin-input"
          />
        </div>
      </div>

      {/* =====================================
          SETTINGS
      ===================================== */}

      <div className="rounded-2xl border border-white/10 bg-[#0d120d] p-5 sm:p-6">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9CFF00]">
            05 / Settings
          </p>

          <h2 className="mt-2 text-lg font-semibold text-white">
            Project Settings
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* ORDER */}

          <div>
            <label className="admin-label">
              Display Order
            </label>

            <input
              type="number"
              name="order"
              min="0"
              value={project.order}
              onChange={handleChange}
              className="admin-input"
            />
          </div>

          {/* FEATURED */}

          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-black/10 px-4 py-3">
            <input
              type="checkbox"
              name="featured"
              checked={Boolean(project.featured)}
              onChange={handleChange}
              className="h-4 w-4 accent-[#9CFF00]"
            />

            <div>
              <p className="text-sm font-medium text-white">
                Featured Project
              </p>

              <p className="text-xs text-gray-500">
                Mark this project as featured.
              </p>
            </div>
          </label>
        </div>
      </div>

      {/* =====================================
          SUBMIT
      ===================================== */}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#9CFF00] px-6 py-3 text-sm font-bold text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          <SaveIcon size={17} />

          {loading
            ? "Creating..."
            : "Create Project"}
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
