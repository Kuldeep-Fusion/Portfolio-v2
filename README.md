#  Kuldeep Kumar — Developer Portfolio

### Code. Create. Animate. Innovate. 

Welcome to my personal developer portfolio — a digital space where creativity meets code.

I'm **Kuldeep Kumar**, a Frontend Developer working toward becoming a Full Stack Developer. I enjoy building modern web applications, creating interactive user interfaces, experimenting with animations, and exploring immersive 3D web experiences.

This project is divided into three major parts: **Frontend, Backend, and Admin Panel**, working together to power the portfolio experience.

 **Live Portfolio:** [kuldeep-zeta.vercel.app](https://kuldeep-zeta.vercel.app/)

> Not just another portfolio. It's a showcase of my skills, creativity, and journey as a developer. 

---

## ✨ About the Project

This portfolio is designed to present my developer profile, technical skills, projects, and professional journey through a modern web experience.

The application follows a modular architecture with three independent parts:

- 🎨 **Frontend:** The public-facing portfolio website.
- ⚙️ **Backend:** Server-side logic and API services.
- 🛡️ **Admin Panel:** An interface for managing portfolio content.

The project combines React, Tailwind CSS, animation libraries, and 3D rendering tools to create a flexible foundation for interactive web experiences.

## 🌟 Key Highlights

- ⚛️ Modern React-based frontend.
- 🎨 Utility-first styling with Tailwind CSS v4.
- ⚡ Advanced animations using GSAP and Motion.
- 🧊 3D graphics capabilities with Three.js and OGL.
- 🧩 Reusable UI components and styling utilities.
- 🧭 Client-side navigation with React Router.
- 🔌 HTTP communication using Axios.
- 🔔 Toast notifications with React Toastify.
- 📊 Vercel Analytics integration.
- 🛡️ Separate admin interface and backend architecture.
- 📱 Responsive design approach for different screen sizes.

*Individual features depend on their implementation in the source code.*

---

## 🏗️ Project Architecture

The repository is organized into three main applications, each responsible for a different part of the portfolio.

```text
portfolio/
│
├── frontend/              # Public portfolio website
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── backend/               # Server and API layer
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── package.json
│   └── server.js
│
├── admin/                 # Portfolio administration
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

*This is a representative structure. Update the directory names and files to match your actual repository.*

### 🎨 1. Frontend — Public Portfolio

The frontend is the public-facing part of the application. It introduces visitors to my developer profile and presents my work through an interactive website.

**Responsibilities**

- Display developer information and professional experience.
- Showcase projects, skills, and technical interests.
- Provide navigation between portfolio sections.
- Deliver interactive UI components and animations.
- Support API communication where required.
- Present a responsive experience across devices.

**Core technologies**

React, React DOM, React Router, Tailwind CSS, Vite, GSAP, Motion, Three.js, OGL, Lucide React, React Icons, and Geist Variable Font.

### ⚙️ 2. Backend — Server & API

The backend is responsible for server-side functionality and communication between the frontend, admin panel, and data sources.

**Responsibilities may include**

- Exposing REST API endpoints.
- Processing incoming requests.
- Validating data.
- Managing database operations, if configured.
- Handling authentication and authorization, if implemented.
- Supporting portfolio content management.

**Architecture**

The backend provides a centralized place for business logic and data operations rather than placing sensitive server-side functionality directly in the frontend.

*Add the exact backend framework, database, authentication strategy, and implemented API features according to your backend source code.*

### 🛡️ 3. Admin Panel — Content Management

The admin panel provides a dedicated interface for managing the portfolio.

Depending on the implemented functionality, it can be used to:

- Manage portfolio projects.
- Update profile and professional information.
- Maintain portfolio content.
- Communicate with backend APIs.
- Access protected management features.

The admin interface is separated from the public website so that visitor-facing experiences and management workflows can be developed independently.

*Only list the management operations that are actually implemented in your application.*

---

## 🛠️ Tech Stack

### Frontend Technologies

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### Animation & 3D Technologies

![GSAP](https://img.shields.io/badge/GSAP-Animation-88CE02?style=for-the-badge&logo=greensock&logoColor=black)
![Motion](https://img.shields.io/badge/Motion-UI_Animation-FFFFFF?style=for-the-badge&logo=framer&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-3D_Graphics-000000?style=for-the-badge&logo=threedotjs&logoColor=white)
![OGL](https://img.shields.io/badge/OGL-WebGL-6E56CF?style=for-the-badge)

### UI & Styling Utilities

![shadcn](https://img.shields.io/badge/shadcn-UI_Tooling-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide-React_Icons-F56565?style=for-the-badge)
![Geist](https://img.shields.io/badge/Geist-Variable_Font-000000?style=for-the-badge)

### API, Tooling & Deployment

![Axios](https://img.shields.io/badge/Axios-HTTP_Client-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployment-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Git](https://img.shields.io/badge/Git-Version_Control-F05032?style=for-the-badge&logo=git&logoColor=white)

### Technology Overview

| Technology | Purpose |
|---|---|
| React 19 | Building component-based interfaces |
| React DOM | Rendering React components |
| React Router 7 | Client-side routing |
| Tailwind CSS 4 | Utility-first styling |
| Vite | Development server and build tooling |
| GSAP | Advanced animations |
| @gsap/react | GSAP integration with React |
| Motion | UI animations and transitions |
| Three.js | 3D graphics and WebGL |
| OGL | Lightweight WebGL rendering |
| Base UI | Accessible UI primitives |
| shadcn | UI component tooling |
| Axios | HTTP requests |
| React Toastify | Toast notifications |
| Lucide React | Icon components |
| React Icons | Additional icon collections |
| Geist Variable | Typography |
| class-variance-authority | Component variants |
| clsx | Conditional class names |
| tailwind-merge | Tailwind class merging |
| tw-animate-css | CSS animation utilities |
| @vercel/analytics | Website analytics integration |

---

## 📂 Repository Organization

The project has three main directories, allowing the public website, server, and management interface to evolve independently.

| Directory | Purpose |
|---|---|
| `frontend/` | Public-facing portfolio website |
| `backend/` | Server-side logic and API endpoints |
| `admin/` | Portfolio management interface |

Each application may have its own dependencies, scripts, configuration files, and environment variables.

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Before getting started, install:

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)
- A database service, if required by the backend

### 1. Clone the Repository

```bash
git clone YOUR_REPOSITORY_URL
cd YOUR_PROJECT_FOLDER
```

Replace the placeholders with your actual repository URL and project directory.

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies

Open a separate terminal from the repository root:

```bash
cd backend
npm install
```

### 4. Install Admin Dependencies

Open another terminal:

```bash
cd admin
npm install
```

---

## 🔐 Environment Configuration

Each application should have its own environment configuration when needed.

### Frontend

If the frontend communicates with your backend through Axios, configure the API base URL using the variable expected by your application.

Example `.env`:

```env
VITE_BASE_URL=http://localhost:5000/api
```

### Backend

Create a `.env` file containing the configuration required by your backend.

Example:

```env
PORT=5000
CLIENT_URL=http://localhost:5173

MONGODB_URI=your_mongodb_connection_string
JWT_ACCESS_SECRET=your_access_token_secret
JWT_REFRESH_SECRET=your_refresh_token_secret
```

These are example variables, not a verified list of your actual backend settings. Add only the variables required by your source code.

### Admin

If the admin panel communicates with the same backend, configure its API URL using the environment variable expected by its code.

For a Vite application, that might look like:

```env
VITE_BASE_URL=http://localhost:5000/api
```

Adjust the URL and variable name to match your implementation.

**Security essentials**

- Never commit real `.env` files or credentials.
- Never expose private API keys or authentication secrets in client-side code.
- Use environment variables for deployment configuration.
- Keep server-side secrets restricted to the backend.
- Configure production origins and secure connections appropriately.

---

## ▶️ Run the Applications

Run each application in a separate terminal.

### Start the Frontend

```bash
cd frontend
npm run dev
```

### Start the Backend

```bash
cd backend
npm run dev
```

### Start the Admin Panel

```bash
cd admin
npm run dev
```

These commands assume the respective `package.json` files define a `dev` script. If a script differs, use the command defined in that application's `package.json`.

### Local Development URLs

Typical Vite development URLs may look like these:

| Application | Example URL |
|---|---|
| Frontend | `http://localhost:5173` |
| Backend | `http://localhost:5000` |
| Admin | `http://localhost:5174` |

These are examples only. The actual ports depend on your application configuration and availability.

---

## ⚡ Build for Production

If each application uses Vite and provides the standard build script, run:

### Frontend

```bash
cd frontend
npm run build
```

### Backend

Build or prepare the backend using the scripts defined in `backend/package.json`. A Node.js backend may not require a separate compilation step.

### Admin

```bash
cd admin
npm run build
```

Vite applications normally produce production assets in a `dist/` directory. Confirm the output directory and build scripts in each application before deployment.

---

## 🔄 How the Applications Work Together

The frontend and admin panel can communicate with the backend to access server-side functionality.

```text
                 ┌────────────────────┐
                 │   Public Visitor   │
                 └─────────┬──────────┘
                           │
                           ▼
                 ┌────────────────────┐
                 │      Frontend      │
                 │  Portfolio Website │
                 └─────────┬──────────┘
                           │
                           │ API Requests
                           ▼
                 ┌────────────────────┐
                 │      Backend       │
                 │    API / Server    │
                 └─────────┬──────────┘
                           │
                           ▼
                 ┌────────────────────┐
                 │ Database / Services│
                 │   If Configured    │
                 └────────────────────┘
                           ▲
                           │
                           │ API Requests
                 ┌─────────┴──────────┐
                 │     Admin Panel    │
                 │ Content Management │
                 └────────────────────┘
```

The frontend focuses on the visitor experience, the backend handles server-side operations, and the admin panel provides management functionality. Database connectivity depends on the backend implementation.

---

## 🎨 UI, Animation & Visual Experience

The frontend uses a modern React ecosystem with libraries that support expressive interfaces and interactive visual elements.

### GSAP & @gsap/react

Useful for timeline-based animations, coordinated transitions, and scroll-triggered interactions when implemented.

### Motion

Supports animated UI elements, transitions, and interactive motion effects.

### Three.js & OGL

Provide WebGL rendering capabilities for 3D scenes, shaders, and visual effects.

### Tailwind CSS v4

Enables utility-first styling, responsive layouts, and consistent design patterns.

### Geist Variable Font

Provides a modern typography option for a clean and readable interface.

These libraries create opportunities for a more engaging experience while keeping the application modular.

---

## 📊 Analytics & User Experience

The project includes `@vercel/analytics` in its dependencies, which can provide website usage insights when properly configured.

Axios supports HTTP communication, React Router handles client-side navigation, and React Toastify provides toast notifications for application feedback where used.

---

## 🛡️ Security & Maintainability

The separation between the frontend, backend, and admin panel helps organize responsibilities across the project.

For production, the application should use:

- Server-side validation.
- Appropriate authentication and authorization for protected admin operations.
- Restricted CORS origins.
- HTTPS and secure cookie settings where applicable.
- Safe handling of secrets and environment variables.
- Error handling and appropriate logging.
- Access controls for sensitive management operations.

These are recommended practices and should be verified against the actual implementation.

---

## 🌐 Deployment

The public portfolio is available at:

**[https://kuldeep-zeta.vercel.app/](https://kuldeep-zeta.vercel.app/)**

The frontend, backend, and admin panel may be deployed separately, depending on their build configuration and hosting requirements.

### Deployment Checklist

- [ ] Configure production environment variables.
- [ ] Deploy the backend to a compatible hosting service.
- [ ] Configure the frontend API base URL.
- [ ] Deploy the frontend.
- [ ] Deploy the admin panel.
- [ ] Configure allowed origins and API access.
- [ ] Verify protected admin routes.
- [ ] Test production builds and responsive layouts.
- [ ] Verify analytics integration if enabled.

---

## 🎯 Learning & Development Goals

As I continue growing as a developer, I'm focused on:

- [ ] Strengthening full-stack development skills.
- [ ] Building scalable applications with the MERN stack.
- [ ] Exploring Next.js and modern rendering techniques.
- [ ] Improving animation performance and accessibility.
- [ ] Exploring advanced Three.js and WebGL techniques.
- [ ] Improving application architecture and reusable components.
- [ ] Building and deploying more production-ready projects.

---

## 👨‍💻 About the Developer

### Kuldeep Kumar

**Frontend Developer | MERN Stack Developer**

I'm passionate about building modern web experiences, exploring new technologies, and solving real-world problems through code.

I enjoy combining development with creative visual techniques to create interfaces that feel intuitive, polished, and interactive.

### Connect With Me

- 🌐 **Portfolio:** [kuldeep-zeta.vercel.app](https://kuldeep-zeta.vercel.app/)
- 🐙 **GitHub:** [Kuldeep-Fusion](https://github.com/Kuldeep-Fusion)
- 💼 **LinkedIn:** Add your LinkedIn profile URL.
- 📧 **Email:** Add your professional email address.

---

## 🤝 Contributions & Feedback

Suggestions, ideas, and feedback are always welcome.

If you want to contribute:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test the relevant application.
5. Submit a pull request with a clear description.

---

## 📄 License

No open-source license has been specified in this README. Add a `LICENSE` file if you intend to distribute the project under a specific license.

---

## 💚 Final Words

This portfolio is more than a website. It's a reflection of my development journey, technical curiosity, and passion for creating digital experiences.

Every project is an opportunity to learn something new, solve a problem, and build something better.

**Built with React. Powered by creativity. Driven by curiosity.** ⚡

If you like my work, explore the portfolio and give the repository a ⭐ on GitHub!

