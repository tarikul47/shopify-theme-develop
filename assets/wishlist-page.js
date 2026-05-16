import { Component } from './component.js';

class WishlistPage extends Component {
  constructor() {
    super();
    this.storageKey = 'shopify-wishlist';
    this.grid = this.querySelector('#wishlist-grid');
    this.emptyMessage = this.querySelector('.wishlist-page__empty');
    this.loadingMessage = this.querySelector('.wishlist-page__loading');
  }

  connectedCallback() {
    this.renderWishlist();
    window.addEventListener('wishlist:updated', () => this.renderWishlist());
  }

  get wishlist() {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  async renderWishlist() {
    const list = this.wishlist;

    if (list.length === 0) {
      this.loadingMessage.classList.add('hidden');
      this.emptyMessage.classList.remove('hidden');
      this.grid.innerHTML = '';
      return;
    }

    this.loadingMessage.classList.remove('hidden');
    this.emptyMessage.classList.add('hidden');

    const products = await Promise.all(
      list.map(async (handle) => {
        const response = await fetch(`/products/${handle}?view=card`);
        if (response.ok) {
          return await response.text();
        }
        return null;
      })
    );

    this.loadingMessage.classList.add('hidden');
    this.grid.innerHTML = products.filter(p => p !== null).join('');
  }
}

customElements.define('wishlist-page', WishlistPage);
