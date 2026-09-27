import { motion } from "framer-motion";
import { useState } from "react";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const ContactForm = ({ rotateX, rotateY, handleFormMove, resetFormMotion }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ============================================
  // HANDLE INPUT CHANGE
  // ============================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error when user starts correcting field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // ============================================
  // VALIDATION
  // ============================================

  const validateForm = () => {
    const newErrors = {};

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    // Name
    if (!name) {
      newErrors.name = "Name is required";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name = "Name can only contain letters";
    }

    // Email
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Phone
    if (!phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    // Subject
    if (!subject) {
      newErrors.subject = "Subject is required";
    } else if (subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    // Message
    if (!message) {
      newErrors.message = "Message is required";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate before API request
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:8000/api/contact/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      console.log("Success:", data);

      // Reset form
      setFormData(initialFormData);
      setErrors({});
    } catch (error) {
      console.error("Submit Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 30,
        scale: 0.98,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay: 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleFormMove}
      onMouseLeave={resetFormMotion}
      className="
        group
        relative
        overflow-hidden
        border
        border-[#9CFF00]/20
        bg-[#050805]
        p-5
        shadow-[0_20px_70px_rgba(0,0,0,0.25)]
        sm:p-6
        md:p-7
      "
    >
      {/* Top Glow */}
      <motion.div
        initial={{
          scaleX: 0,
          opacity: 0,
        }}
        whileInView={{
          scaleX: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          left-0
          right-0
          top-0
          h-px
          origin-left
          bg-gradient-to-r
          from-transparent
          via-[#9CFF00]
          to-transparent
          shadow-[0_0_15px_#9CFF00]
        "
      />

      {/* Corner HUD */}
      <div className="pointer-events-none absolute left-3 top-3 h-6 w-6 border-l border-t border-[#9CFF00]/50" />
      <div className="pointer-events-none absolute right-3 top-3 h-6 w-6 border-r border-t border-[#9CFF00]/50" />
      <div className="pointer-events-none absolute bottom-3 left-3 h-6 w-6 border-b border-l border-[#9CFF00]/30" />
      <div className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 border-b border-r border-[#9CFF00]/30" />

      {/* Header */}
      <div className="relative z-10 mb-6 flex items-center justify-between border-b border-white/[0.06] pb-4">
        <div className="flex items-center gap-3">
          <motion.span
            animate={{
              opacity: [1, 0.35, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#9CFF00]
              shadow-[0_0_8px_#9CFF00]
            "
          />

          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">
            Send a message
          </p>
        </div>

        <span className="text-[8px] font-bold tracking-widest text-gray-700">
          04 / 04
        </span>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="relative z-10 space-y-5"
      >
        {/* Name + Email */}
        <div className="grid gap-5 md:grid-cols-2">
          <FormField
            label="Your Name"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            error={errors.name}
          />

          <FormField
            label="Email Address"
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            error={errors.email}
          />
        </div>

        {/* Phone + Subject */}
        <div className="grid gap-5 md:grid-cols-2">
          <FormField
            label="Phone Number"
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="9876543210"
            maxLength={10}
            error={errors.phone}
          />

          <FormField
            label="Subject"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="Let's build something awesome"
            error={errors.subject}
          />
        </div>

        {/* Message */}
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            delay: 0.46,
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <label
            htmlFor="message"
            className="
              mb-2
              block
              text-[8px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-gray-600
            "
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Tell me about your project..."
            className={`
              w-full
              resize-none
              border
              ${errors.message ? "border-red-500/60" : "border-white/[0.08]"}
              bg-[#020502]
              px-3
              py-3
              text-xs
              text-white
              outline-none
              transition-all
              duration-300
              placeholder:text-gray-700
              hover:border-white/[0.14]
              focus:border-[#9CFF00]/60
              focus:bg-[#071007]
              focus:shadow-[0_0_25px_rgba(156,255,0,0.06)]
            `}
          />

          {errors.message && (
            <p className="mt-1 text-[9px] text-red-400">{errors.message}</p>
          )}
        </motion.div>

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{
            y: loading ? 0 : -2,
            boxShadow: loading ? "none" : "0 10px 35px rgba(156,255,0,0.22)",
          }}
          whileTap={{
            scale: loading ? 1 : 0.985,
          }}
          className="
            group
            flex
            w-full
            items-center
            justify-center
            gap-3
            bg-[#9CFF00]
            px-5
            py-3.5
            text-[9px]
            font-black
            uppercase
            tracking-[0.15em]
            text-black
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {loading ? "Sending..." : "Send Message"}

          {!loading && (
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

// ============================================
// FORM FIELD COMPONENT
// ============================================

const FormField = ({
  label,
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  error,
  maxLength,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <label
        htmlFor={id}
        className="
          mb-2
          block
          text-[8px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-gray-600
        "
      >
        {label}
        {required && <span className="ml-1 text-[#9CFF00]">*</span>}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        className={`
          w-full
          border
          ${error ? "border-red-500/60" : "border-white/[0.08]"}
          bg-[#020502]
          px-3
          py-3
          text-xs
          text-white
          outline-none
          transition-all
          duration-300
          placeholder:text-gray-700
          hover:border-white/[0.14]
          focus:border-[#9CFF00]/60
          focus:bg-[#071007]
          focus:shadow-[0_0_25px_rgba(156,255,0,0.06)]
        `}
      />

      {error && <p className="mt-1 text-[9px] text-red-400">{error}</p>}
    </motion.div>
  );
};

export default ContactForm;
