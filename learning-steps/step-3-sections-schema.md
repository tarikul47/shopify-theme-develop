# Step 3: Sections & Customization (Schema)

Sections are the core building blocks of Shopify. They allow merchants to customize the theme without touching code.

## The Section Structure
A section file (e.g., `sections/divider.liquid`) typically contains:
1. **Liquid/HTML**: The markup that appears on the site.
2. **Schema `{% schema %}`**: A JSON object that defines the settings in the Theme Editor.

## Connecting Schema to Liquid
To use a value from the schema in your Liquid code:
- If the schema has a setting with `"id": "section_width"`, you access it in Liquid using `{{ section.settings.section_width }}`.

## Presets
The `"presets"` block in the schema is vital. It allows the section to be selectable in the "Add Section" menu of the Shopify Theme Editor.

```json
"presets": [
  {
    "name": "My New Section"
  }
]
```
