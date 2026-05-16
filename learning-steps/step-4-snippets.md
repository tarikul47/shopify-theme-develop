# Step 4: Snippets & the Render Tag

Snippets are reusable pieces of code located in the `snippets/` folder. They help keep your code DRY (Don't Repeat Yourself).

## Key Characteristics
- **No Schema**: Unlike sections, snippets cannot have a `{% schema %}` block.
- **Dependency**: They rely on data passed to them from the parent file (Section or Template).

## The `render` Tag
To use a snippet, use the `{% render %}` tag:
```liquid
{% render 'icon-cart', color: 'red' %}
```

## Passing Data
You can pass variables into a snippet so it can be dynamic:
1. **In the Section**: `{% render 'my-snippet', my_variable: section.settings.text %}`
2. **In the Snippet**: Use `{{ my_variable }}` to display the data.

*Note: Always use `render` instead of the older `include` tag for better performance.*
