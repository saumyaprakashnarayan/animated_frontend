# Project Changelog

This file tracks all modifications made to the codebase during our pair programming sessions.

## Recent Changes (Current Session)

*   **`index.html`**: Restored individual background images for the 3D services cards (`hpcsol.png`, etc.) using CSS variables (`--bg-img`).
*   **`styles/components.css`**: Enhanced the readability of the 3D services cards. Added a dark linear-gradient overlay (`::after`) to the cards to improve contrast, and applied text-shadows to the headings (`h3`), paragraphs (`p`), and list items (`li`).
*   **`src/interactions.js`**: Slowed down the automatic rotation speed of the 3D carousel from `0.08` to `0.03` for a smoother, more premium viewing experience.
*   **`src/BackgroundParticles.js`**: Changed the color initialization of all background particles and grid lines to stark white (`0xffffff`) instead of the previous Sage/Emerald/Lime mix.
*   **Rollback Event**: Attempted a major structural overhaul of the Hero section and heavily reduced particle count. This caused layout issues (black screen/hidden hero), so it was immediately reverted to ensure the application remained stable.

*   **`src/main.js`**: Disabled seasonal color shifting in the Services section to ensure the premium Emerald Green (`#00f59b`) scheme remains strictly active throughout the UI.
*   **`styles/components.css` & `index.html`**: Fixed a cascading issue that caused card background images to vanish and the active card glow to disappear. Cards now correctly display their background images, properly dim when inactive (`opacity: 0.4`), and pop when active. Corrected inline CSS variable paths to `url('/hpcsol.png')` for reliable root-relative resolution.
*   **Global Color Uniformity**: Searched through all CSS files (`components.css`, `layout.css`, `tokens.css`) and stripped out all stray/hardcoded secondary colors (like Cyber Lime, Winter Blue, and Purple/Grey). Every hover state, shadow, gradient, and glow across the entire site now strictly adheres to the premium Emerald Green (`#00f59b`) and Obsidian (`#060f0c`) color palette.
*   **3D Carousel Rendering Fix**: Fixed a critical layout bug that caused all cards in the carousel to collapse and vanish (except one squeezed card). This occurred because a CSS `transition: transform` rule was continuously fighting the 60fps JavaScript `requestAnimationFrame` loop that was trying to position the cards in 3D space. Removed the CSS transition for `transform` and updated `interactions.js` to correctly calculate and assign the `.active` glow and `scale` logic frame-by-frame.
*   **Industries Section Overhaul**: Completely redesigned the 'Expertise across every vertical' grid to be premium and readable. Replaced the flat transparent borders with a unified glassmorphism container, increased the height of each item, brightened the typography, and replaced the illegible dark-gray hover text with a clean, smooth slide-up animation that displays crisp, highly visible descriptions.
*   **3D Carousel Rotation Speed**: Slowed down the default carousel rotation speed from `0.3` to `0.025` to create a smooth, subtle, and premium drifting effect instead of spinning rapidly.
*   **Holographic Card Backgrounds**: Creatively enhanced the visibility of the background images in the 3D carousel. Implemented a `mix-blend-mode: screen` effect combined with a heavy bottom-up dark gradient on the `.active` cards. This creates a stunning "holographic" aesthetic where the top of the image shines brilliantly through the glass, while the bottom seamlessly fades into the dark obsidian card background, ensuring the typography remains 100% readable.
