# Nexus AI — AI Consulting & Implementation

A professional, interactive web experience showcasing AI consulting and implementation services. The landing page features a highly optimized, procedural 3D background built with Three.js and GSAP. 

## Features
- **Modular ES6 Architecture:** The Three.js engine is cleanly separated into reusable modules (`src/`).
- **Seamless 3D Morphing:** The central AI entity seamlessly evolves through 10 distinct mathematical phases (Neural Sphere, Torus Knot, Hologram, etc.) using procedural vertex displacement and GSAP cross-fading.
- **Cinematic Rendering:** Uses `MeshPhysicalMaterial` for realistic glass/metal, powered by a custom cinematic lighting rig, `UnrealBloomPass` for neon glows, and `FXAAShader` for anti-aliasing.
- **Scroll-Triggered Particle Morphing:** The 15,000 background particles seamlessly restructure themselves into 6 different geometric formations (Grid, DNA Helix, Sine Wave, etc.) perfectly synced with the user's scroll position.
- **Glassmorphism UI:** UI elements utilize frosted glass styling to ensure the background animation is always beautifully visible.
- **Full-Stack Contact Flow:** Includes a Python-based backend API (`server.py`) and SQLite database to capture lead submissions, viewable via a dedicated Admin Dashboard (`admin.html`).

## How to Run Locally

This project features a decoupled architecture with a modern Vite frontend and a Python backend API.

### 1. Starting the Frontend (Vite)
Ensure you have [Node.js](https://nodejs.org/) installed. Open your terminal in the project folder and run:
```bash
npm install
npm run dev
```
This will start the blazing-fast Vite development server (usually on `http://localhost:5173`) with Hot Module Replacement (HMR).

### 2. Starting the Backend API
If you need to test the Contact Form submissions or the Admin Dashboard locally, you must run the backend server in a separate terminal window:
```bash
python3 server.py
```
This script initializes the SQLite database (`contacts.db`) and serves the API endpoints on port 8000.

## Deployment

The frontend is fully optimized for static hosting via Vite.

1. **Build the project**: Run `npm run build` in your terminal. This generates a `dist/` folder containing your minified, highly-optimized production code.
2. **Deploy**: You can deploy the `dist/` folder to any static host (like Vercel, Netlify, or GitHub Pages). The static host will serve your 3D experience perfectly.
*(Note: To handle real contact form submissions in production, you will need to host `server.py` on a platform that supports Python (like Render or Heroku) and point the frontend API calls to it, or swap the form endpoint to a service like Formspree.)*

## File Structure

```
├── index.html               # Main entry point containing UI and GSAP triggers
├── admin.html               # Admin dashboard for viewing form submissions
├── server.py                # Python backend server providing APIs and static file hosting
├── contacts.db              # SQLite database (generated upon running server.py)
├── src/                     # Three.js ES6 Modules
│   ├── main.js              # Controller linking Three.js loop to global sceneState
│   ├── App.js               # Core Three.js boilerplate (Renderer, Camera)
│   ├── BackgroundParticles.js # The 15k particle system with scroll-based pattern morphing
│   ├── Lighting.js          # Cinematic lighting rig
│   ├── PostProcessing.js    # EffectComposer (Bloom + FXAA)
│   ├── RobotFace.js         # The high-fidelity robotic face model for the Hero section
│   ├── JetPlane.js          # The Jet plane model for Process section
│   ├── GPUModel.js          # The procedural GPU chipset for Services section
│   ├── RoboticEye.js        # The robotic eye model for Industries section
│   ├── ANNModel.js          # The Neural Network model for Technology section
│   ├── SuperComputerModel.js# The Super Computer model for Team section
│   └── SpacetimeModel.js    # The warped spacetime model for Pricing section
```
