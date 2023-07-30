// cart.js



  
  function addToCart(name, rate) {
    var cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      cartItems = JSON.parse(cartItems);
    } else {
      cartItems = [];
    }
  
    // Check if the item is already in the cart
    var existingItem = cartItems.find(function(item) {
      return item.name === name;
    });
  
    if (existingItem) {
      // Update the quantity of the existing item
      existingItem.quantity += 1;
    } else {
      // Add a new item to the cart
      var newItem = {
        name: name,
        rate: rate,
        quantity: 1
      };
      cartItems.push(newItem);
    }
  
    // Save the updated cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
    // Update the cart count display
    updateCartCount();
  }
  
  updateCartCount();
  