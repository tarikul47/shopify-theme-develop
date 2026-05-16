# Step 7: Global Settings (config)

Global settings apply to the entire theme and are managed in the `config/` folder.

## Key Files
1. **`settings_schema.json`**: Defines the "Theme Settings" tab in the Shopify Editor. This is where you create fields for colors, fonts, and social media links.
2. **`settings_data.json`**: Stores the current values selected by the merchant.

## Accessing Global Settings
Unlike sections (which use `section.settings`), global settings are accessed via the `settings` object from anywhere in the theme:
- `{{ settings.color_accent }}`
- `{{ settings.social_instagram_link }}`

## Summary of Settings Objects
- **`section.settings`**: Local to the section file it is in.
- **`block.settings`**: Local to a specific block within a section.
- **`settings`**: Global to the entire theme.
