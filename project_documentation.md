# Trayaksh.ai Project Documentation

This document outlines the architecture, file structure, and technical rationale behind the interactive, 3D-driven front-end of the Trayaksh.ai website.

## Project Overview

Trayaksh.ai is an immersive, high-end promotional website designed to showcase AI infrastructure and HPC (High-Performance Computing) solutions. The project heavily utilizes **Three.js** for 3D rendering and WebGL effects, **GSAP (GreenSock)** for scroll-driven animations, and advanced **CSS 3D Transforms** for interactive UI components.

The core philosophy is to create a "cinematic" experience where the background environment and lighting react dynamically to the user's scroll position and mouse interactions, seamlessly blending the HTML DOM with the WebGL canvas.

---

## Directory Structure & Architecture

The project is structured into four main layers: HTML (Structure), CSS (Styling), JS (Logic/WebGL), and Backend (Python).

### 1. HTML Structure
- **`index.html`**: The entry point of the application. 
  - Contains the semantic layout (`<nav>`, `<header>`, `<section>`s).
  - Uses a fixed `<canvas id="webgl-canvas">` behind the DOM to render the 3D scene.
  - Loads the JS components as ES Modules.

### 2. Styling Layer (`/styles/`)
The CSS is broken down into modular files for maintainability, adhering strictly to vanilla CSS without frameworks (except where specified).
- **`base.css`**: Global resets, typography loading, and base HTML body styling.
- **`tokens.css`**: Contains all CSS Custom Properties (Variables) like `--accent`, `--bg-dark`, typography scales, and z-indexes. This acts as the project's design system.
- **`layout.css`**: Defines macro-layouts, including the responsive navigation bar, hero section flex-boxing, and footer grid.
- **`components.css`**: Contains the styles for specific UI elements (e.g., dropdowns, cards). Crucially, this file houses the complex CSS Grid and 3D transform logic (`preserve-3d`) required for the Services carousel.

### 3. JavaScript & WebGL Logic (`/src/`)
The javascript architecture is modular, separating the Three.js entity logic from the global render loop and DOM interaction logic.

#### Core Loop & Setup
- **`main.js`**: The orchestration file. 
  - Initializes the Three.js `Scene`, `PerspectiveCamera`, and `WebGLRenderer`.
  - Maintains a global `window.sceneState` object that serves as the single source of truth for communication between DOM events (like scrolling) and the 3D objects.
  - Contains the core `tick()` function (via `requestAnimationFrame`), which loops constantly to update all 3D modules (lighting, particles, models) and render the scene.

#### 3D Entities
- **`BackgroundParticles.js`**: Manages a system of 15,000 points.
  - **What it does**: Creates various geometric patterns (Grid, Double Helix, Sphere, Wave, Cylinder, Random Dust) and smoothly interpolates particle positions (`MathUtils.lerp`) between them. It also features a glowing "inner aura".
  - **Why**: Provides a dynamic, tech-focused background that changes its physical shape based on the current page section. It also includes "Seasonal Physics" (drifting upward, downward, etc.) that reacts to the Services carousel rotation.
- **`RobotFace.js`**: Handles the loading and display of the `humanoid_robot_face.glb` 3D model.
  - **What it does**: Applies custom emissive materials to the robot. It rotates the robot horizontally based on the user's scroll depth and applies an organic 5-second asynchronous pulsing animation.
  - **Why**: Acts as the centerpiece of the Hero section, giving the site an immediate AI-focused identity.
- **`RoboticEye.js`, `JetPlane.js`, `GPUModel.js`, `ANNModel.js`, `SuperComputerModel.js`, `SpacetimeModel.js`**: 
  - **What they do**: Provide section-specific 3D assets that scale up and down dynamically as the user scrolls. They each feature unique pulsing, lighting, or generative geometries to match their specific section themes.

#### Rendering & Lighting
- **`Lighting.js`**: 
  - **What it does**: Sets up the scene's illumination, including a Key Light, two Rim Lights, and a Center Point Light. It animates their intensities using a 5-second asymmetric cycle (3s rise, 2s fall).
  - **Why**: Careful lighting prevents WebGL materials from looking flat or getting "blown out" by excessive specular highlights. The pulsing logic creates a "breathing" environment that feels alive.
- **`PostProcessing.js`**: 
  - **What it does**: Replaces the standard Three.js renderer with an `EffectComposer`, utilizing a `RenderPass` and an `UnrealBloomPass`.
  - **Why**: Bloom is essential for the neon, glowing aesthetic of the site, making the emissive materials and particle colors bleed beautifully into the dark background.

#### Interactivity & DOM Integration
- **`scrollTriggers.js`**: 
  - **What it does**: Utilizes GSAP (GreenSock) and `ScrollTrigger` to track the user's vertical scroll through different HTML sections (`#services`, `#process`, etc.).
  - **Why**: Instead of directly manipulating 3D objects, GSAP modifies values inside `window.sceneState` (like `bloomStrength`, `cameraRotationZ`, `activeSection`, `particlePattern`). The `main.js` tick loop then smoothly interpolates the 3D objects to match these new state values, ensuring buttery smooth transitions decoupled from strict DOM scroll performance.
- **`interactions.js`**: 
  - **What it does**: Handles complex DOM-specific interactions, primarily the **Services 3D CSS Carousel**. It calculates the trigonometry required to arrange 12 HTML cards into a perfect 3D cylinder. It listens for mouse drags and wheel scrolls to rotate the cylinder on the Y-axis.
  - **Seasonal Sync**: As the cylinder rotates, it calculates which "season" is facing the user (grouping the 12 cards into 4 seasons) and updates `window.sceneState.seasonIndex`. This allows `main.js` to change the global CSS `--accent` color and the background particle physics to match the active season.

### 4. Backend & API Layer
To support dynamic form submissions and lead tracking, the project includes a lightweight Python backend.
- **`server.py`**: A custom HTTP server extending `http.server.SimpleHTTPRequestHandler`. It serves the static frontend files while explicitly intercepting API routes.
  - **`/api/contact` (POST)**: Receives JSON data from the contact form, inserts it into the SQLite database, and returns a success status.
  - **`/api/contacts` (GET)**: Fetches all submitted leads from the database for the admin dashboard.
- **`contacts.db`**: A local SQLite database automatically initialized by `server.py` to store lead data persistently.
- **`admin.html`**: A separate dashboard page that consumes the `/api/contacts` endpoint and renders the captured leads.

---

## Technical Highlights & Rationale

### The "State-Driven" WebGL Approach
A common pitfall in WebGL + DOM projects is hardcoding 3D animations directly inside scroll event listeners, which causes stuttering. This project uses a **State-Driven Architecture**. 
GSAP ScrollTrigger purely updates numbers inside `window.sceneState`. The Three.js `tick()` loop reads those numbers and uses `THREE.MathUtils.lerp` to ease the camera and objects towards the target state. This guarantees smooth 60fps animations regardless of how fast the user scrolls.

### CSS 3D vs WebGL for the Carousel
The Services Carousel uses **CSS 3D Transforms** (`rotateY`, `translateZ`) rather than rendering WebGL planes. 
**Why?** Because the cards contain complex typography, SVG icons, and hover states. Rendering rich text in WebGL is notoriously difficult and bad for SEO/Accessibility. By using CSS 3D, we maintain perfect text crispness, SEO indexing, and standard HTML interactions while still achieving a spatial 3D effect.

### Asymmetric Animation Timers
Lighting and glowing effects on the site do not use simple sine waves (which look mechanical). Instead, they use custom time-modulo logic to create asymmetric easing (e.g., taking 3 seconds to brighten, but only 2 seconds to dim). This subtle variation mimics organic "breathing", making the UI feel premium and cinematic.
