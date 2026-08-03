# Trayaksh.ai — High Performance Computing

An Awwwards-level interactive web experience featuring a highly optimized, procedural 3D AI entity built with Three.js and GSAP. 

## Features
- **Modular ES6 Architecture:** The Three.js engine is cleanly separated into reusable modules (`src/`).
- **Seamless 3D Morphing:** The central AI entity seamlessly evolves through 10 distinct mathematical phases (Neural Sphere, Torus Knot, Hologram, etc.) using procedural vertex displacement and GSAP cross-fading.
- **Cinematic Rendering:** Uses `MeshPhysicalMaterial` for realistic glass/metal, powered by a custom cinematic lighting rig, `UnrealBloomPass` for neon glows, and `FXAAShader` for anti-aliasing.
- **Scroll-Triggered Particle Morphing:** The 15,000 background particles seamlessly restructure themselves into 6 different geometric formations (Grid, DNA Helix, Sine Wave, etc.) perfectly synced with the user's scroll position.
- **Glassmorphism UI:** UI elements utilize frosted glass styling to ensure the background animation is always beautifully visible.

## How to Run Locally

Because this project uses ES6 Modules (`<script type="module">`), you cannot simply double-click the `index.html` file to open it in a browser due to strict CORS policies. 

You must serve the files using a local development server.

### Option 1: Python (Recommended)
If you have Python installed, simply open your terminal in the project folder and run:
```bash
python3 -m http.server 8000
```
Then open your browser and navigate to: `http://localhost:8000`

### Option 2: VS Code Live Server
If you use Visual Studio Code:
1. Install the **Live Server** extension by Ritwick Dey.
2. Open the project folder in VS Code.
3. Right-click on `index.html` and select **"Open with Live Server"**.

### Option 3: Node.js (npx)
If you have Node.js installed, you can use `http-server`:
```bash
npx http-server -p 8000
```
Then open your browser and navigate to: `http://localhost:8000`

## File Structure

```
├── index.html               # Main entry point containing UI and GSAP triggers
├── src/                     # Three.js ES6 Modules
│   ├── main.js              # Controller linking Three.js loop to global sceneState
│   ├── App.js               # Core Three.js boilerplate (Renderer, Camera)
│   ├── AIEntity.js          # The 60-second seamless morphing logic for the 10 models
│   ├── BackgroundParticles.js # The 15k particle system with scroll-based pattern morphing
│   ├── Lighting.js          # Cinematic lighting rig
│   ├── Materials.js         # Factory for physical, glass, and holographic materials
│   └── PostProcessing.js    # EffectComposer (Bloom + FXAA)
```
