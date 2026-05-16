# Step 6: Assets (CSS, JS, and Images)

The `assets/` folder contains the theme's static files. Shopify uses a Content Delivery Network (CDN) to serve these files efficiently.

## Using Asset Filters
You must use Liquid filters to generate the correct URLs for files in this folder.

### CSS
To include a stylesheet:
`{{ 'base.css' | asset_url | stylesheet_tag }}`

### JavaScript
To include a script:
`{{ 'global.js' | asset_url | script_tag }}`

### Images & SVGs
To get an image URL:
`<img src="{{ 'icon.svg' | asset_url }}">`

## Performance Tip
In modern themes like Horizon, JS is often split into many small files. This allows for "conditional loading," where code is only loaded for the sections present on the current page.
