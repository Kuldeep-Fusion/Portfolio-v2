import { useState } from "react";

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProject((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /* =========================================
     TECHNOLOGY
  ========================================= */

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

  /* =========================================
     IMAGE
  ========================================= */

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const previewUrl = URL.createObjectURL(file);

    setProject((prev) => ({
      ...prev,
      image: {
        file,
        preview: previewUrl,
      },
    }));
  };

  /* =========================================
     SUBMIT
  ========================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Project:", project);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-6"
    >

      {/* =====================================================
          01 / BASIC INFORMATION
      ===================================================== */}

      <section className="w-full rounded-2xl border border-white/10 bg-[#0d120d] p-5 sm:p-6 lg:p-8">

        {/* Heading */}
        <div className="mb-7">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9CFF00]">
            01 / INFORMATION
          </p>

          <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
            Basic Information
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Add the basic details of your project.
          </p>
        </div>

        {/* Fields */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* TITLE */}
          <div className="min-w-0">
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Project Title
            </label>

            <input
              id="title"
              type="text"
              name="title"
              value={project.title}
              onChange={handleChange}
              placeholder="Portfolio Website"
              className="
                block w-full
                rounded-xl
                border border-white/10
                bg-[#080b08]
                px-4 py-3
                text-sm text-white
                placeholder:text-gray-600
                outline-none
                transition
                focus:border-[#9CFF00]/50
                focus:ring-2
                focus:ring-[#9CFF00]/10
              "
              required
            />
          </div>

          {/* SLUG */}
          <div className="min-w-0">
            <label
              htmlFor="slug"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Slug
            </label>

            <input
              id="slug"
              type="text"
              name="slug"
              value={project.slug}
              onChange={handleChange}
              placeholder="portfolio-website"
              className="
                block w-full
                rounded-xl
                border border-white/10
                bg-[#080b08]
                px-4 py-3
                text-sm text-white
                placeholder:text-gray-600
                outline-none
                transition
                focus:border-[#9CFF00]/50
                focus:ring-2
                focus:ring-[#9CFF00]/10
              "
              required
            />
          </div>

          {/* TAGLINE */}
          <div className="min-w-0 md:col-span-2">
            <label
              htmlFor="tagline"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Tagline
            </label>

            <input
              id="tagline"
              type="text"
              name="tagline"
              value={project.tagline}
              onChange={handleChange}
              placeholder="A sleek modern portfolio built with Next.js..."
              className="
                block w-full
                rounded-xl
                border border-white/10
                bg-[#080b08]
                px-4 py-3
                text-sm text-white
                placeholder:text-gray-600
                outline-none
                transition
                focus:border-[#9CFF00]/50
                focus:ring-2
                focus:ring-[#9CFF00]/10
              "
            />
          </div>

          {/* DESCRIPTION */}
          <div className="min-w-0 md:col-span-2">
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Description
            </label>

            <textarea
              id="description"
              name="description"
              value={project.description}
              onChange={handleChange}
              rows={6}
              placeholder="Describe your project..."
              className="
                block w-full
                resize-y
                rounded-xl
                border border-white/10
                bg-[#080b08]
                px-4 py-3
                text-sm leading-6 text-white
                placeholder:text-gray-600
                outline-none
                transition
                focus:border-[#9CFF00]/50
                focus:ring-2
                focus:ring-[#9CFF00]/10
              "
            />
          </div>

        </div>
      </section>

      {/* =====================================================
          02 / TECHNOLOGIES
      ===================================================== */}

      <section className="w-full rounded-2xl border border-white/10 bg-[#0d120d] p-5 sm:p-6 lg:p-8">

        <div className="mb-7">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9CFF00]">
            02 / STACK
          </p>

          <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
            Technologies
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Add technologies used in this project.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">

          <input
            type="text"
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
            onKeyDown={handleTechnologyKeyDown}
            placeholder="React"
            className="
              block min-w-0 flex-1
              rounded-xl
              border border-white/10
              bg-[#080b08]
              px-4 py-3
              text-sm text-white
              placeholder:text-gray-600
              outline-none
              transition
              focus:border-[#9CFF00]/50
              focus:ring-2
              focus:ring-[#9CFF00]/10
            "
          />

          <button
            type="button"
            onClick={addTechnology}
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#9CFF00]
              px-5 py-3
              text-sm
              font-bold
              text-black
              transition
              hover:brightness-110
            "
          >
            <PlusIcon size={17} />
            Add
          </button>

        </div>

        {/* Technology Tags */}
        {project.technologies.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">

            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  border border-[#9CFF00]/20
                  bg-[#9CFF00]/5
                  px-3
                  py-1.5
                  text-sm
                  text-[#9CFF00]
                "
              >
                {tech}

                <button
                  type="button"
                  onClick={() => removeTechnology(tech)}
                  className="text-[#9CFF00]/60 transition hover:text-white"
                >
                  <XIcon size={13} />
                </button>
              </span>
            ))}

          </div>
        )}

      </section>

      {/* =====================================================
          03 / LINKS
      ===================================================== */}

      <section className="w-full rounded-2xl border border-white/10 bg-[#0d120d] p-5 sm:p-6 lg:p-8">

        <div className="mb-7">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9CFF00]">
            03 / LINKS
          </p>

          <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
            Project Links
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Add live website and source code links.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* LIVE */}
          <div className="min-w-0">
            <label
              htmlFor="live"
              className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300"
            >
              <LinkIcon size={15} />
              Live URL
            </label>

            <input
              id="live"
              type="url"
              name="live"
              value={project.live}
              onChange={handleChange}
              placeholder="https://example.com"
              className="
                block w-full
                rounded-xl
                border border-white/10
                bg-[#080b08]
                px-4 py-3
                text-sm text-white
                placeholder:text-gray-600
                outline-none
                transition
                focus:border-[#9CFF00]/50
                focus:ring-2
                focus:ring-[#9CFF00]/10
              "
            />
          </div>

          {/* GITHUB */}
          <div className="min-w-0">
            <label
              htmlFor="github"
              className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300"
            >
              <GithubIcon size={15} />
              GitHub URL
            </label>

            <input
              id="github"
              type="url"
              name="github"
              value={project.github}
              onChange={handleChange}
              placeholder="https://github.com/username/project"
              className="
                block w-full
                rounded-xl
                border border-white/10
                bg-[#080b08]
                px-4 py-3
                text-sm text-white
                placeholder:text-gray-600
                outline-none
                transition
                focus:border-[#9CFF00]/50
                focus:ring-2
                focus:ring-[#9CFF00]/10
              "
            />
          </div>

        </div>
      </section>

      {/* =====================================================
          04 / IMAGE
      ===================================================== */}

      <section className="w-full rounded-2xl border border-white/10 bg-[#0d120d] p-5 sm:p-6 lg:p-8">

        <div className="mb-7">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9CFF00]">
            04 / MEDIA
          </p>

          <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
            Project Image
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Upload the project cover image.
          </p>
        </div>

        {/* Upload */}
        <label
          htmlFor="project-image"
          className="
            flex
            min-h-[220px]
            w-full
            cursor-pointer
            flex-col
            items-center
            justify-center
            rounded-xl
            border
            border-dashed
            border-white/15
            bg-[#080b08]
            p-6
            text-center
            transition
            hover:border-[#9CFF00]/40
            hover:bg-[#9CFF00]/[0.02]
          "
        >

          <ImageIcon
            size={34}
            className="mb-4 text-gray-600"
          />

          <span className="text-sm font-medium text-gray-300">
            {project.image?.file?.name ||
              "Click to upload image"}
          </span>

          <span className="mt-2 text-xs text-gray-600">
            PNG, JPG or WEBP
          </span>

          <input
            id="project-image"
            type="file"
            accept="image/png,image/jpeg,image/webp"
            onChange={handleImageChange}
            className="hidden"
          />

        </label>

        {/* ALT */}
        <div className="mt-6">

          <label
            htmlFor="imageAlt"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Image Alt Text
          </label>

          <input
            id="imageAlt"
            type="text"
            name="imageAlt"
            value={project.imageAlt}
            onChange={handleChange}
            placeholder="Portfolio Website Homepage Screenshot"
            className="
              block w-full
              rounded-xl
              border border-white/10
              bg-[#080b08]
              px-4 py-3
              text-sm text-white
              placeholder:text-gray-600
              outline-none
              transition
              focus:border-[#9CFF00]/50
              focus:ring-2
              focus:ring-[#9CFF00]/10
            "
          />

        </div>
      </section>

      {/* =====================================================
          05 / SETTINGS
      ===================================================== */}

      <section className="w-full rounded-2xl border border-white/10 bg-[#0d120d] p-5 sm:p-6 lg:p-8">

        <div className="mb-7">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9CFF00]">
            05 / SETTINGS
          </p>

          <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
            Project Settings
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* ORDER */}
          <div>
            <label
              htmlFor="order"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Display Order
            </label>

            <input
              id="order"
              type="number"
              name="order"
              min="1"
              value={project.order}
              onChange={handleChange}
              className="
                block w-full
                rounded-xl
                border border-white/10
                bg-[#080b08]
                px-4 py-3
                text-sm text-white
                outline-none
                transition
                focus:border-[#9CFF00]/50
                focus:ring-2
                focus:ring-[#9CFF00]/10
              "
            />
          </div>

          {/* FEATURED */}
          <label
            htmlFor="featured"
            className="
              flex
              cursor-pointer
              items-center
              gap-4
              rounded-xl
              border border-white/10
              bg-[#080b08]
              px-4
              py-3
            "
          >

            <input
              id="featured"
              type="checkbox"
              name="featured"
              checked={project.featured}
              onChange={handleChange}
              className="h-4 w-4 accent-[#9CFF00]"
            />

            <div>
              <p className="text-sm font-medium text-white">
                Featured Project
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Show this project as featured.
              </p>
            </div>

          </label>

        </div>
      </section>

      {/* =====================================================
          SUBMIT
      ===================================================== */}

      <div className="flex justify-end pb-8">

        <button
          type="submit"
          className="
            inline-flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#9CFF00]
            px-6
            py-3
            text-sm
            font-bold
            text-black
            transition
            hover:brightness-110
            sm:w-auto
          "
        >
          <SaveIcon size={17} />
          Create Project
        </button>

      </div>

    </form>
  );
};

export default ProjectForm;