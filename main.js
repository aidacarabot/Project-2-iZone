const PRODUCTS = [
  {
    name: 'iPhone 15 Pro',
    price: 1139,
    stars: 4.8,
    reviews: 500,
    category: 'iPhone',
    image: 'assets/iphone-15-pro.jpeg'
  },
  {
    name: 'iPhone 15',
    price: 849,
    stars: 4.5,
    reviews: 250,
    category: 'iPhone',
    image: 'assets/iphone-15.jpeg'
  },
  {
    name: 'iPhone 14',
    price: 699,
    stars: 3.8,
    reviews: 120,
    category: 'iPhone',
    image: 'assets/iphone-14.jpeg'
  },
  {
    name: 'iPhone SE',
    price: 429,
    stars: 3.5,
    reviews: 150,
    category: 'iPhone',
    image: 'assets/iphone-se.jpeg'
  },
  {
    name: 'iPad Air',
    price: 599,
    stars: 4.4,
    reviews: 200,
    category: 'iPad',
    image: '/assets/ipad-air.jpeg'
  },
  {
    name: 'iPad Pro',
    price: 799,
    stars: 4.8,
    reviews: 500,
    category: 'iPad',
    image: '/assets/ipad-pro.jpeg'
  },
  {
    name: 'Macbook Air',
    price: 999,
    stars: 4.7,
    reviews: 320,
    category: 'Macbook',
    image: '/assets/macbook-air.jpeg'
  },
  {
    name: 'Macbook Pro',
    price: 1599,
    stars: 4.6,
    reviews: 280,
    category: 'Macbook',
    image: '/assets/macbook-pro.jpeg'
  },
  {
    name: 'iMac',
    price: 1299,
    stars: 4.3,
    reviews: 220,
    category: 'Macbook',
    image: '/assets/imac.jpeg'
  },
  {
    name: 'Apple Watch Series 9',
    price: 399,
    stars: 3.3,
    reviews: 400,
    category: 'Watch',
    image: '/assets/watch-series-9.jpeg'
  }
];
//! FUNCIÓN CARTAS DE PRODUCTOS -> para que sea más fácil pintarlo en html creamos un bucle que se repite
const printProducts  = (products) => {
  const productSection = document.querySelector('#products');

  productSection.innerHTML = '';

  for (const product of products) {
  
    const divProduct = document.createElement("div");
    const imgProduct = document.createElement("img")
    const h2 = document.createElement("h2")
    const priceProduct = document.createElement("p")
    const divReviews = document.createElement("div")
    const starsProduct = document.createElement("div")
    const reviewProduct = document.createElement("p")
    const linkElement = document.createElement('a');
    const spanElement1 = document.createElement('span');
    const spanElement2 = document.createElement('span');
    const spanElement3 = document.createElement('span');
    const spanElement4 = document.createElement('span');


    imgProduct.src = product.image
    imgProduct.alt = product.name
    h2.textContent = product.name
    priceProduct.textContent = `$${product.price}`
    starsProduct.classList.add('stars');
    starsProduct.style.setProperty('--rating', product.stars); //! star
    reviewProduct.textContent = `(${product.reviews})`
    divProduct.classList.add('productCard')
    //!button add to cart:
    linkElement.classList.add('fancy');
    linkElement.href = '#';
    spanElement1.classList.add('top-key');
    spanElement2.classList.add('text');
    spanElement2.textContent = 'ADD TO CART';
    spanElement3.classList.add('bottom-key-1');
    spanElement4.classList.add('bottom-key-2');


    divProduct.appendChild(imgProduct)
    divProduct.appendChild(h2)
    divProduct.appendChild(priceProduct)
    divProduct.appendChild(divReviews)
    divReviews.appendChild(starsProduct)
    divReviews.appendChild(reviewProduct)
    linkElement.appendChild(spanElement1);
    linkElement.appendChild(spanElement2);
    linkElement.appendChild(spanElement3);
    linkElement.appendChild(spanElement4);
    divProduct.appendChild(linkElement);
    productSection.appendChild(divProduct)
   
  }
}
//! FUNCIÓN PARA PONER PRODUCTOS ALEATORIOS
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const shuffledProducts = shuffleArray(PRODUCTS);
printProducts(shuffledProducts);
//! FUNCIÓN HEADER -> para pintar el header
const printHeader = () => {
  const headerSection = document.querySelector('#header')

  //Create elements inside of it:
  //!hamburger:
  const divBurger = document.createElement('div');
  const label = document.createElement('label');
  const inputHam = document.createElement('input');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const span3 = document.createElement('span');
  //! logo:
  const divLogo = document.createElement('div');
  const  imgLogo = document.createElement('img');
  const h1 = document.createElement( "h1" );


  //Adding others:
  //! hamburger:
  label.classList.add('divBurger');
  label.classList.add('burger');
  label.htmlFor = 'burger';
  inputHam.type = 'checkbox';
  inputHam.id = 'burger';
  //! logo:
  imgLogo.src= "/assets/favicon.png";
  imgLogo.alt="Logo";
  h1.textContent = 'iZone';
  imgLogo.classList.add('logo');
  divLogo.classList.add('logoDiv');

  //Connecting Elements
  //!logo:
  divLogo.appendChild(imgLogo);
  divLogo.appendChild(h1);
  //!hamburger:
  label.appendChild(inputHam);
  label.appendChild(span1);
  label.appendChild(span2);
  label.appendChild(span3);
  divBurger.appendChild(label);
  headerSection.appendChild(divLogo);
  headerSection.appendChild(divBurger);
}
printHeader();
//! FUNCIÓN DE BÚSQUEDA -> desde el header
const searchProducts = (products, searchTerm) => {
  // Filter the products based on the search term
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  // Clear the existing product cards
  const productSection = document.querySelector('#products');
  productSection.innerHTML = '';

  // Print the filtered products
  if (filteredProducts.length > 0) {
    printProducts(filteredProducts);
  } else {
      // Print up to 3 suggested products
      const suggestedProducts = shuffleArray(PRODUCTS).slice(0, 3);
      printProducts(suggestedProducts);

      // Print a message saying that nothing was found
      const message = document.createElement('p');
      message.textContent = 'Sorry, nothing was found. Find here other suggestions:';
      message.classList.add('no-results');
      productSection.appendChild(message);
  }
}
//? Add an event listener to the input field
const inputField = document.querySelector('.input');
inputField.addEventListener('input', (e) => {
  const searchTerm = e.target.value;
  searchProducts(PRODUCTS, searchTerm);
});
//! HIDE/UNHIDE SIDE SECTION
const burgerBtn = document.getElementById("burger");
const sideSection = document.getElementById("filter");
burgerBtn.addEventListener("click", () => {
  sideSection.classList.toggle("activo");
});
//! FUNCIÓN MAQUETAR SIDE SECTION
const printSection = () => {
  const sideSection = document.querySelector('#filter');

  //? SELECT CATEGORY
  const categorySelect = document.createElement('select');
  const categoryOption = document.createElement('option');

  categorySelect.id = 'category-select';
  categoryOption.textContent = 'Select Category';
  categoryOption.value = 'all';
  categorySelect.insertBefore(categoryOption, categorySelect.firstChild);
  const categories = Array.from(new Set(PRODUCTS.map(product => product.category))); // Para que no se repitan las categorias
  categorySelect.appendChild(categoryOption);
  for (const category of categories) {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  } 

  
  sideSection.appendChild(categorySelect);

  //? PRICE RANGE
  const divPrice = document.createElement('div');
  const priceTitle = document.createElement('h4');
  const priceRange = document.createElement('input');
  const divPriceLabel = document.createElement('div');
  const minPrice = document.createElement('span');
  const maxPrice = document.createElement('span');

  priceRange.type = 'range';
  priceRange.min = 0;
  priceRange.max = 2000;
  priceRange.value = 0;
  priceRange.id = 'price-range';
  divPrice.id = 'div-price-range';
  divPriceLabel.id = 'price-labels';
  minPrice.id = 'min-price';
  maxPrice.id = 'max-price';
  minPrice.textContent = `$${priceRange.min}`;
  maxPrice.textContent = `$${priceRange.max}`;
  priceTitle.textContent = 'Set the maximum price:'

     // Update the labels whenever the user interacts with the range input
         priceRange.addEventListener('input', () => {
           maxPrice.textContent = `$${priceRange.value}`;
         });

  divPrice.appendChild(priceTitle);
  divPrice.appendChild(priceRange);
  divPrice.appendChild(divPriceLabel);
  divPriceLabel.appendChild(minPrice);
  divPriceLabel.appendChild(maxPrice);
  sideSection.appendChild(divPrice);

  //? FILTER BUTTON
  const buttonSubmit = document.createElement('button');
  const spanSubmitHover = document.createElement('span');
  const submitBorder = document.createElement('div');

  buttonSubmit.classList.add('full-rounded');
  spanSubmitHover.textContent = 'Filter';
  buttonSubmit.id = 'filter-btn';
  submitBorder.classList.add('border', 'full-rounded');

  buttonSubmit.appendChild(spanSubmitHover);
  buttonSubmit.appendChild(submitBorder);
  sideSection.appendChild(buttonSubmit);


  //? CLEAR FILTERS BUTTON
  const buttonFilter = document.createElement('button');
  const spanButton = document.createElement('span');
  

  spanButton.textContent = 'Clear Filters';
  buttonFilter.id ='clearFilters';

  buttonFilter.appendChild(spanButton);
  sideSection.appendChild(buttonFilter);


}
printSection()

//! FUNCION FILTER PRODUCTS
const filterProducts  = () =>{
  const categorySelect = document.getElementById('category-select').value; // Obtiene el valor seleccionado en el filtro de categoría
  const priceRange = document.getElementById('price-range');
  const maxPrice = parseInt(priceRange.value, 10);
  
  const filteredProducts = PRODUCTS.filter(product => {
    const categoryMatch = categorySelect === 'all' || product.category === categorySelect;
    const priceMatch = product.price <= maxPrice || product.price === '' || maxPrice === '';
    return categoryMatch && priceMatch;
  })

  // Clear the existing product cards
  const productSection = document.querySelector('#products');
  productSection.innerHTML = '';

  //! Print the filtered products
  if (filteredProducts.length > 0) {
    printProducts(filteredProducts);
  } else {
     // Print up to 3 suggested products
     const suggestedProducts = shuffleArray(PRODUCTS).slice(0, 3);
     printProducts(suggestedProducts);

    // Print a message saying that nothing was found
    const message = document.createElement('p');
    message.textContent = 'Sorry, nothing was found that matches your filters. Here are some suggestions:';
    message.classList.add('no-results');
    productSection.appendChild(message);
  }
}

//? Event Listener Category:
const filterButton = document.getElementById('filter-btn');
filterButton.addEventListener( "click", filterProducts)

//! FUNCIÓN PARA REESTABLECER LOS FILTROS A VALORES INICIALES
function resetFilters() {
  document.getElementById('category-select').value = 'all'; // Pone categoria a "todas"
  document.getElementById("price-range").value=0 // Establece el rango de precio en cero
  const maxPrice = document.getElementById("max-price");
  maxPrice.textContent = '$2000';
  printProducts(PRODUCTS); // Muestra todos los productos sin filtrar
}
//? Event Listener:
const clearFilters = document.getElementById('clearFilters');
clearFilters.addEventListener('click',resetFilters);

//? Event Listener:
const divLogoReset = document.querySelector('.logoDiv');
divLogoReset.addEventListener('click', resetFilters);




