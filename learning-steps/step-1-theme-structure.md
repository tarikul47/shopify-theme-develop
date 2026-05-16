# Step 1: Theme Structure Overview

Shopify themes follow a strict directory structure. Here is how the Horizon theme is organized:

1. **layout/**: The outer shell of the theme (e.g., `theme.liquid`).
2. **templates/**: Page-specific structures (e.g., `index.json`, `product.json`).
3. **sections/**: Modular components that merchants can customize in the Theme Editor.
4. **blocks/**: Smaller components used inside sections.
5. **snippets/**: Reusable chunks of Liquid code.
6. **assets/**: CSS, JavaScript, and image files.
7. **config/**: Theme settings and schema definitions.
8. **locales/**: Translation files for multi-language support.

Every file has a specific purpose, and Shopify's engine looks for them in these exact locations.
