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

This project features a full-stack architecture with an ES6 frontend and a Python backend. It requires running the custom Python server to enable the Contact form API and Admin Dashboard.

### Starting the Server
Ensure you have Python 3 installed. Open your terminal in the project folder and run:
```bash
python3 server.py
```
This script will:
1. Initialize the SQLite database (`contacts.db`) if it doesn't exist.
2. Start serving static files and API endpoints (`/api/contact`, `/api/contacts`) on port 8000.

Then open your browser and navigate to: 
- **Main Website:** `http://localhost:8000`
- **Admin Dashboard:** `http://localhost:8000/admin.html`

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
