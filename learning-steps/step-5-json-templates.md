# Step 5: JSON Templates (Online Store 2.0)

In modern themes like Horizon, templates (e.g., `templates/index.json`) are JSON files instead of Liquid files.

## Purpose
JSON templates allow merchants to add, remove, and reorder sections on any page via the Theme Editor.

## Structure
A JSON template consists of:
1. **`sections`**: An object containing the sections present on the page.
   - Each section has a `"type"` which corresponds to a file in the `sections/` folder.
2. **`order`**: An array that defines the sequence in which the sections are rendered.
3. **`settings`**: The configuration values for each section.

## How it works
When Shopify renders a page, it reads the JSON template, finds the corresponding `.liquid` files in the `sections/` folder, and injects the merchant's settings into them.
