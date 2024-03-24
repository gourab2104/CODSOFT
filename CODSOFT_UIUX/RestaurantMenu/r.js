const menu = [
  { 
    category: 'Breakfast', 
    criteria: 'Served until 11:00 AM', 
    items: [
      { name: 'Masala Dosa', cost: 120, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\masaladosa.jpg', deliveryTime: '15-20 minutes' },
      { name: 'Aloo Paratha', cost: 100, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\aloo.jpg', deliveryTime: '12-18 minutes' },
      { name: 'Poha', cost: 80, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\poha.jpg', deliveryTime: '12-18 minutes' },
      { name: 'Upma', cost: 110, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\upma.jpg', deliveryTime: '15-20 minutes' },
      { name: 'Idli Sambar', cost: 70, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\idli.jpg', deliveryTime: '10-15 minutes' },
    ]
  },
  { 
    category: 'Lunch', 
    criteria: 'Served from 11:00 AM to 3:00 PM', 
    items: [
      { name: 'Biryani', cost: 180, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\biriyani.jpg', deliveryTime: '20-25 minutes' },
      { name: 'Butter Chicken', cost: 150, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\butterchic.jpg', deliveryTime: '15-20 minutes' },
      { name: 'Chole Bhature', cost: 120, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\cholebh.jpg', deliveryTime: '12-18 minutes' },
      { name: 'Paneer Tikka', cost: 140, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\pantikka.jpg', deliveryTime: '18-22 minutes' },
      { name: 'Rajma Chawal', cost: 130, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\rajma.jpg', deliveryTime: '18-22 minutes' },
    ]
  },
  {
  category: 'Dinner', 
    criteria: 'Served from 5:00 PM to 10:00 PM', 
    items: [
      { name: 'Palak Paneer', cost: 130, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\palakapn.jpg', deliveryTime: '25-30 minutes' },
      { name: 'Chicken Biryani', cost: 160, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\chickenbiri.jpg', deliveryTime: '20-25 minutes' },
      { name: 'Dal Makhani', cost: 90, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\dalmakk.jpg', deliveryTime: '18-22 minutes' },
      { name: 'Samosa Chaat', cost: 40, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\samosachatt.jpg', deliveryTime: '20-25 minutes' },
      { name: 'Mutton Rogan Josh', cost: 220, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\muttonrogan.jpg', deliveryTime: '22-27 minutes' },
    ]
  },
  { 
    category: 'Beverages', 
    criteria: 'Available all day', 
    items: [
      { name: 'Masala Chai', cost: 50, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\chai.jpg', deliveryTime: '5-10 minutes' },
      { name: 'Lassi', cost: 40, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\lassi.jpg', deliveryTime: '5-10 minutes' },
      { name: 'Mango Shake', cost: 40, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\mango.jpg', deliveryTime: '5-10 minutes' },
      { name: 'Cold Coffee', cost: 60, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\coldcoffee.jpg', deliveryTime: '5-10 minutes' },
      { name: 'Thandai', cost: 30, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\thandai.jpg', deliveryTime: '5-10 minutes' },
    ]
  },
  { 
    category: 'Desserts', 
    criteria: 'Available all day', 
    items: [
      { name: 'Gulab Jamun', cost: 90, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\gulab.jpg', deliveryTime: '8-12 minutes' },
      { name: 'Rasgulla', cost: 100, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\rasgulla.jpg', deliveryTime: '8-12 minutes' },
      { name: 'Kulfi', cost: 70, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\kulfi.jpg', deliveryTime: '8-12 minutes' },
      { name: 'Jalebi', cost: 60, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\jalebi.jpg', deliveryTime: '8-12 minutes' },
      { name: 'Rasmalai', cost: 80, image: 'C:\\Users\\dell\\OneDrive\\Desktop\\CODSOFT_UIUX\\RestaurantMenu\\images\\rasmalai.jpg', deliveryTime: '8-12 minutes' },
    ]
  },
  
  
  // Add more categories with items
];
// Function to add item to wishlist
function addToWishlist(itemName, itemCost) {
  const notification = event.target.parentElement.querySelector('.wishlist-notification');
  const wishlistIcon = event.target.parentElement.querySelector('.wishlist-icon');

  // Display the notification and wishlist icon
  notification.style.display = 'block';
  wishlistIcon.style.display = 'inline';

  // Hide the notification after 3 seconds
  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);

  // You can add your wishlist handling logic here
  // For now, let's just log the item added to the console
  console.log(`${itemName} added to wishlist`);
}
// Function to add item to cart
// Function to add item to cart
function addToCart(itemName, itemCost) {
  const notification = event.target.parentElement.querySelector('.cart-notification');
  const cartIcon = event.target.parentElement.querySelector('.cart-icon');

  // Display the notification and cart icon
  notification.style.display = 'block';
  cartIcon.style.display = 'inline';

  // Hide the notification after 3 seconds
  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);

  // Optional: You can also log the item added to the console
  console.log(`${itemName} added to cart`);
}



// Function to display categories
function displayCategories() {
  const categoriesContainer = document.getElementById('categories-container');
  menu.forEach(categoryData => {
    const categoryButton = document.createElement('button');
    categoryButton.classList.add('category');
    categoryButton.textContent = categoryData.category;
    categoryButton.onclick = () => displayItems(categoryData);
    categoriesContainer.appendChild(categoryButton);
  });
}

// Function to display items
function displayItems(categoryData) {
  const itemsContainer = document.getElementById('items-container');
  itemsContainer.innerHTML = '';
  categoryData.items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="item-details">
        <h3>${item.name}</h3>
        <p>Cost: Rs.${item.cost.toFixed(2)}</p>
        <p>Delivery Time: ${item.deliveryTime}</p>
        <button onclick="addToCart('${item.name}', ${item.cost})">Add to Cart</button>
        <button onclick="addToWishlist('${item.name}', ${item.cost})" class="wishlist-btn">Wishlist</button>
        <span class="wishlist-icon">❤️</span>
        <span class="cart-icon" style="display:none;">🛒</span>
        <div class="wishlist-notification">Item added to wishlist</div>
        <div class="cart-notification" style="display:none;">Item added to cart</div>

      </div>
    `;
    itemsContainer.appendChild(itemDiv);
  });
}

// Initial display of categories
displayCategories();

