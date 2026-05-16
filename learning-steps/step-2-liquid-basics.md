# Step 2: Liquid Basics & the Entry Point

Liquid is Shopify's templating language. It uses three main syntaxes:

1. **Output `{{ ... }}`**: Displays data.
   - Example: `{{ product.title }}` shows the name of the product.
2. **Logic `{% ... %}`**: Controls the flow (if statements, loops).
   - Example: `{% if customer %} Welcome back! {% endif %}`.
3. **Filters `|`**: Modifies the output.
   - Example: `{{ "hello" | capitalize }}` outputs "Hello".

## The Entry Point: theme.liquid
Located in the `layout/` folder, `theme.liquid` is the master template.

### Mandatory Tags:
- `{{ content_for_header }}`: Injected in the `<head>`. Required for Shopify scripts/apps.
- `{{ content_for_layout }}`: Injected in the `<body>`. This is where the specific page content (from templates) is loaded.
