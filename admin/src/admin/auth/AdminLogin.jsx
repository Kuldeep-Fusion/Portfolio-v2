
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LockIcon,
  UserIcon,
  EyeIcon,
  EyeOffIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  LayoutDashboardIcon,
  FileTextIcon,
  FolderIcon,
} from "@animateicons/react/lucide";

import { LoginUser } from "../../services/api";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /*
  ========================================
  Already Logged In
  ========================================
  */

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("adminLoggedIn");

    if (isLoggedIn === "true") {
      navigate("/admin", {
        replace: true,
      });
    }
  }, [navigate]);

  /*
  ========================================
  Input Change
  ========================================
  */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  /*
  ========================================
  Login
  ========================================
  */

 const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");

  if (!formData.email.trim()) {
    setError("Please enter your admin ID.");
    return;
  }

  if (!formData.password) {
    setError("Please enter your password.");
    return;
  }

  try {
    setLoading(true);

    const response = await LoginUser(formData);

    console.log("Login response:", response.data);

    // Login successful
    sessionStorage.setItem("adminLoggedIn", "true");

    navigate("/admin", {
      replace: true,
    });

  } catch (error) {
    console.error("Admin login error:", error);

    setError(
      error.response?.data?.message ||
      "Invalid admin credentials."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="min-h-screen bg-[#070908] text-white flex items-center justify-center p-4 sm:p-6">

      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">

        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#c7f36b]/5 blur-[120px]" />

        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#c7f36b]/5 blur-[120px]" />

        <div
          className="
            absolute inset-0
            opacity-[0.025]
            bg-[radial-gradient(#ffffff_1px,transparent_1px)]
            [background-size:24px_24px]
          "
        />

      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl">

        {/* CMS Header */}
        <div className="mb-6 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                bg-[#c7f36b]
                text-black
              "
            >
              <LayoutDashboardIcon
                size={20}
                strokeWidth={2}
              />
            </div>

            <div>
              <p className="text-sm font-semibold tracking-tight">
                Admin CMS
              </p>

              <p className="text-[11px] text-white/35">
                Content Management System
              </p>
            </div>

          </div>

          {/* Security */}
          <div
            className="
              hidden sm:flex
              items-center gap-2
              rounded-full
              border border-white/[0.07]
              bg-white/[0.025]
              px-3 py-1.5
              text-[11px]
              text-white/40
            "
          >
            <LockIcon size={12} />

            Secure Admin Portal
          </div>

        </div>

        {/* Login Layout */}
        <div
          className="
            overflow-hidden
            rounded-3xl
            border border-white/[0.08]
            bg-[#0d100e]/95
            shadow-[0_30px_100px_rgba(0,0,0,0.45)]
            backdrop-blur-xl
            lg:grid
            lg:grid-cols-[1fr_0.9fr]
          "
        >

          {/* ================= LEFT PANEL ================= */}

          <section
            className="
              relative
              hidden lg:flex
              min-h-[620px]
              flex-col
              justify-between
              overflow-hidden
              border-r border-white/[0.07]
              p-10
              xl:p-12
            "
          >

            {/* Decorative Glow */}
            <div
              className="
                absolute
                -top-32
                -right-32
                h-72
                w-72
                rounded-full
                bg-[#c7f36b]/[0.06]
                blur-[100px]
              "
            />

            {/* Top */}
            <div className="relative z-10">

              <div
                className="
                  mb-8
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  border border-[#c7f36b]/20
                  bg-[#c7f36b]/10
                  text-[#c7f36b]
                "
              >
                <ShieldCheckIcon
                  size={27}
                  strokeWidth={1.7}
                />
              </div>

              <p
                className="
                  mb-3
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-[#c7f36b]/70
                "
              >
                Private Workspace
              </p>

              <h1
                className="
                  max-w-md
                  text-4xl
                  font-semibold
                  leading-[1.1]
                  tracking-tight
                  text-white
                  xl:text-5xl
                "
              >
                Manage your website
                <span className="text-[#c7f36b]">
                  {" "}with confidence.
                </span>
              </h1>

              <p
                className="
                  mt-5
                  max-w-md
                  text-sm
                  leading-6
                  text-white/40
                "
              >
                Access your private CMS workspace to manage
                projects, content and website data from one
                secure administration panel.
              </p>

              {/* Features */}
              <div className="mt-10 space-y-4">

                {/* Dashboard */}
                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-lg
                      bg-white/[0.04]
                      text-white/60
                    "
                  >
                    <LayoutDashboardIcon size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white/75">
                      Centralized dashboard
                    </p>

                    <p className="text-xs text-white/30">
                      Manage everything from one place
                    </p>
                  </div>

                </div>

                {/* Content */}
                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-lg
                      bg-white/[0.04]
                      text-white/60
                    "
                  >
                    <FileTextIcon size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white/75">
                      Content management
                    </p>

                    <p className="text-xs text-white/30">
                      Create and manage website content
                    </p>
                  </div>

                </div>

                {/* Projects */}
                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-lg
                      bg-white/[0.04]
                      text-white/60
                    "
                  >
                    <FolderIcon size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white/75">
                      Project management
                    </p>

                    <p className="text-xs text-white/30">
                      Keep your projects organized
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Bottom */}
            <div className="relative z-10">

              <div className="mb-5 h-px w-full bg-white/[0.06]" />

              <div className="flex items-center justify-between">

                <span className="text-xs text-white/25">
                  CMS Administration
                </span>

                <span className="flex items-center gap-2 text-xs text-white/25">

                  <span className="h-1.5 w-1.5 rounded-full bg-[#c7f36b]" />

                  System protected

                </span>

              </div>

            </div>

          </section>

          {/* ================= RIGHT PANEL ================= */}

          <section
            className="
              flex
              min-h-[620px]
              items-center
              p-6
              sm:p-10
              lg:p-12
              xl:p-14
            "
          >

            <div className="w-full max-w-md mx-auto">

              {/* Mobile Logo */}
              <div className="mb-8 flex items-center gap-3 lg:hidden">

                <div
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-xl
                    bg-[#c7f36b]
                    text-black
                  "
                >
                  <LayoutDashboardIcon size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Admin CMS
                  </p>

                  <p className="text-[11px] text-white/35">
                    Secure administration
                  </p>
                </div>

              </div>

              {/* Heading */}
              <div className="mb-8">

                <div
                  className="
                    mb-5
                    inline-flex
                    items-center gap-2
                    rounded-full
                    border border-[#c7f36b]/15
                    bg-[#c7f36b]/5
                    px-3 py-1.5
                    text-[11px]
                    font-medium
                    text-[#c7f36b]/80
                  "
                >
                  <LockIcon size={12} />

                  ADMIN ACCESS
                </div>

                <h2
                  className="
                    text-3xl
                    font-semibold
                    tracking-tight
                    text-white
                    sm:text-4xl
                  "
                >
                  Welcome back
                </h2>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Sign in to access your administration dashboard.
                </p>

              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Admin ID */}
                <div>

                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-xs
                      font-medium
                      uppercase
                      tracking-wider
                      text-white/50
                    "
                  >
                    Admin ID
                  </label>

                  <div className="relative">

                    <UserIcon
                      size={17}
                      className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-white/25
                      "
                    />

                    <input
                      id="email"
                      name="email"
                      type="text"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your admin ID"
                      autoComplete="username"
                      disabled={loading}
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border border-white/[0.08]
                        bg-[#080a09]
                        pl-11
                        pr-4
                        text-sm
                        text-white
                        placeholder:text-white/20
                        outline-none
                        transition
                        focus:border-[#c7f36b]/40
                        focus:ring-4
                        focus:ring-[#c7f36b]/5
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                      "
                    />

                  </div>

                </div>

                {/* Password */}
                <div>

                  <div className="mb-2 flex items-center justify-between">

                    <label
                      htmlFor="password"
                      className="
                        text-xs
                        font-medium
                        uppercase
                        tracking-wider
                        text-white/50
                      "
                    >
                      Password
                    </label>

                    <span className="text-[10px] text-white/20">
                      PRIVATE
                    </span>

                  </div>

                  <div className="relative">

                    <LockIcon
                      size={17}
                      className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-white/25
                      "
                    />

                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      disabled={loading}
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border border-white/[0.08]
                        bg-[#080a09]
                        pl-11
                        pr-12
                        text-sm
                        text-white
                        placeholder:text-white/20
                        outline-none
                        transition
                        focus:border-[#c7f36b]/40
                        focus:ring-4
                        focus:ring-[#c7f36b]/5
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((prev) => !prev)
                      }
                      disabled={loading}
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                      className="
                        absolute
                        right-2
                        top-1/2
                        flex
                        h-8
                        w-8
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-lg
                        text-white/25
                        transition
                        hover:bg-white/[0.05]
                        hover:text-white/70
                        disabled:cursor-not-allowed
                      "
                    >
                      {showPassword ? (
                        <EyeOffIcon size={17} />
                      ) : (
                        <EyeIcon size={17} />
                      )}
                    </button>

                  </div>

                </div>

                {/* Error */}
                {error && (
                  <div
                    className="
                      flex
                      items-start
                      gap-3
                      rounded-xl
                      border border-red-500/15
                      bg-red-500/[0.05]
                      px-4
                      py-3
                    "
                  >

                    <div
                      className="
                        mt-0.5
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-red-500/10
                        text-[11px]
                        font-bold
                        text-red-400
                      "
                    >
                      !
                    </div>

                    <p className="text-xs leading-5 text-red-400">
                      {error}
                    </p>

                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    group
                    flex
                    h-12
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#c7f36b]
                    text-sm
                    font-semibold
                    text-black
                    transition-all
                    hover:bg-[#d4ff80]
                    hover:shadow-[0_0_35px_rgba(199,243,107,0.12)]
                    active:scale-[0.99]
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  "
                >

                  {loading ? (
                    <>
                      <span
                        className="
                          h-4
                          w-4
                          animate-spin
                          rounded-full
                          border-2
                          border-black/20
                          border-t-black
                        "
                      />

                      Authenticating...
                    </>
                  ) : (
                    <>
                      Sign in to CMS

                      <ArrowRightIcon
                        size={17}
                        className="
                          transition-transform
                          group-hover:translate-x-1
                        "
                      />
                    </>
                  )}

                </button>

              </form>

              {/* Security */}
              <div
                className="
                  mt-8
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-[11px]
                  text-white/20
                "
              >
                <ShieldCheckIcon size={13} />

                <span>
                  Protected admin session
                </span>
              </div>

              {/* Footer */}
              <p
                className="
                  mt-3
                  text-center
                  text-[10px]
                  text-white/15
                "
              >
                Authorized personnel only
              </p>

            </div>

          </section>

        </div>

        {/* Bottom Footer */}
        <div className="mt-5 flex items-center justify-between px-1">

          <p className="text-[10px] text-white/15">
            Admin CMS
          </p>

          <p className="text-[10px] text-white/15">
            Secure • Private • Authorized
          </p>

        </div>

      </div>

    </main>
  );
};

export default AdminLogin;
