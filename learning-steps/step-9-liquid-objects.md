# Step 9: Common Liquid Objects

Shopify provides several objects that contain all the data you need to build your theme.

## 1. `product`
Used on product pages to display details like title, price, and images.
- `{{ product.title }}`
- `{{ product.price | money }}`

## 2. `collection`
Used on collection pages to display category information and list products.
- `{% for product in collection.products %}`: Iterates through the collection.

## 3. `cart`
Accessible globally to show the current state of the customer's shopping basket.
- `{{ cart.item_count }}`: Number of items.
- `{{ cart.total_price | money }}`: Total cost.

## 4. `customer`
Contains information about the logged-in user.
- `{{ customer.first_name }}`
- `{% if customer %}`: Check if a user is logged in.

## 5. `shop`
General store information.
- `{{ shop.name }}`
- `{{ shop.domain }}`

## Debugging Tip
To see all the data available in an object, you can use the `json` filter:
`{{ product | json }}`
