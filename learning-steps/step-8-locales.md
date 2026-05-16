# Step 8: Locales & Translation (t filter)

Shopify themes use translation files to support multiple languages and allow merchants to edit text easily.

## The `locales/` Folder
Contains JSON files for each language (e.g., `en.default.json`).

## The `t` Filter
To display translated text in Liquid, use the translation key followed by the `t` filter:
`{{ 'products.product.add_to_cart' | t }}`

## Translations in Schema
In `{% schema %}`, you can use the `t:` prefix to translate labels and settings:
`"label": "t:settings.color_scheme"`

## Benefits
1. **Internationalization**: Easily switch between languages.
2. **Merchant Control**: Merchants can edit theme text without touching the code.
