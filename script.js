// Code for dropdown menu
const nav = document.querySelector('.header__nav');
const dropdownToggle = document.querySelector('.header__icon--menu-toggle');

dropdownToggle.addEventListener('click', () => {
  nav.classList.toggle('show-nav');
});

// Code for notification
const notification = document.querySelector('.header__notification');

setTimeout(() => {
  notification.classList.add('show-notification');
}, 3000);

// Code for adding items to cart
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
const cartBadge = document.querySelector('.header__nav-item .cart-badge');
let numItemsInCart = 0;

Array.from(addToCartButtons).forEach(button => {
  button.addEventListener('click', function() {
    numItemsInCart += 1;
    updateCartBadge(numItemsInCart);
  });
});

function updateCartBadge(numItems) {
  cartBadge.textContent = numItems;
}


// Code for search functionality
const searchForm = document.querySelector('.search-bar');
const searchInput = document.querySelector('.search-bar input');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const searchTerm = searchInput.value;
  // Perform search operation with the search term
  // You can send a request to a server or filter items on the client-side
  console.log('Performing search with term:', searchTerm);
  // Clear the search input field
  searchInput.value = '';
});

// Code for wishlist functionality
const wishlistButton = document.querySelector('.header__icon--wishlist');
const wishlistCount = document.querySelector('.wishlist-count');
let numItemsInWishlist = 0;

wishlistButton.addEventListener('click', function() {
  numItemsInWishlist += 1;
  updateWishlistCount(numItemsInWishlist);
});

function updateWishlistCount(numItems) {
  wishlistCount.textContent = numItems;
}








