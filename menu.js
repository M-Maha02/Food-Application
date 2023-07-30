// Sample menu items (you can replace them with your actual menu items)
const menuItems = [
    {
      name: 'sezhvan Noodle',
      description: 'Classic beef burger',
      price: 5,
      image: 'noodle.jpg'
    },
    {
      name: 'Pizza',
      description: 'Margherita pizza',
      price: 8,
      image: 'pizza.jpg'
    },
    {
      name: 'Salad',
      description: 'Fresh garden salad',
      price: 6,
      image: 'salad.jpg'
    },
  ];
  
  // Display menu items on the page
  const menuContainer = document.getElementById('menuitem');
  menuItems.forEach((menuItem, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('menuitem');
    itemDiv.innerHTML = `
      <h3>${index + 1}. ${menuItem.name}</h3>
      <img src="${menuItem.image}" alt="${menuItem.name}">
      <p>${menuItem.description}</p>
      <p>Price: Rs${menuItem.price}</p>
    `;
    itemDiv.addEventListener('click', () => {
      // Handle item click (you can implement the ordering functionality here)
      console.log(`You clicked on ${menuItem.name}`);
    });
    menuContainer.appendChild(itemDiv);
  });
  