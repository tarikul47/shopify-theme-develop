import { Component } from './component.js';

class WishlistButton extends Component {
  constructor() {
    super();
    this.storageKey = 'shopify-wishlist';
  }

  connectedCallback() {
    this.updateState();
    window.addEventListener('wishlist:updated', () => this.updateState());
  }

  get wishlist() {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  set wishlist(value) {
    localStorage.setItem(this.storageKey, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent('wishlist:updated', { detail: value }));
  }

  toggle() {
    const handle = this.dataset.productHandle;
    let list = this.wishlist;

    if (list.includes(handle)) {
      list = list.filter(item => item !== handle);
    } else {
      list.push(handle);
    }

    this.wishlist = list;
  }

  updateState() {
    const handle = this.dataset.productHandle;
    if (this.wishlist.includes(handle)) {
      this.setAttribute('active', '');
    } else {
      this.removeAttribute('active');
    }
  }
}

customElements.define('wishlist-button', WishlistButton);
