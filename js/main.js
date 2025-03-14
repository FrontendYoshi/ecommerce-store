let cart = [];
let products = [
  {
    name: "Hundespielzeug Erdmännchen",
    price: 7.99,
    image: "assets/Erdmännchen.png",
  },
  { name: "Hundespielzeug Eule", price: 6.99, image: "assets/Eule.png" },
  { name: "Hundespielzeug Geier", price: 6.37, image: "assets/Geier.png" },
  {
    name: "Hundespielzeug Plüschblume",
    price: 4.99,
    image: "assets/Plüschblume.png",
  },
];

// jmd klickt auf den button, es wird ein neues objekt erstellt und dem warenkorb hinzugefügt
function addtoCart(name, price) {
  const index = cart.findIndex(productInCart => productInCart.name === name);

  // Wenn Produkt im Warenkorb
  if (index >= 0) {
    // Menge hochzählen
    cart[index].quantity += 1;  
  }
  // sonst
  else {
    cart.push({
      name: name,
      price: price,
      quantity: 1,
    });
  }

  showCart(cart); // Warenkorb anzeigen
}

function removeFromCart(index) {
  cart.splice(index, 1);
  showCart(cart);
}

function sumCart(cart) {
  let sum = 0;
  for (const product of cart) {
    sum += product.price * product.quantity;  // Preis * Menge berücksichtigen
  }
  return sum;
}

// Funktion um Warenkorb anzeigen zu können
function showCart(cart) {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = ""; // Produkte werden aus dem Warenkorb gelöscht und die neuen hinzugefügt

  // Für jedes Produkt im Warenkorb HTML erzeugen
  cart.forEach((product, index) => {
    const div = document.createElement("div"); // Element <div> erstellen und als Konstante speichern
    div.innerHTML = `
      <p>${product.name}, ${product.price}€ x ${product.quantity} = ${product.price * product.quantity}€</p>
      <button onclick="removeFromCart(${index})">Aus dem Warenkorb löschen</button>
    `;
    cartItems.appendChild(div);
  });

  // Summe berechnen und anzeigen
  const cartTotal = sumCart(cart);
  document.getElementById("cart-total").textContent = `Gesamt: ${cartTotal.toFixed(2)}€`; // Summe auf 2 Dezimalstellen formatieren
}

function showProducts(products) {
  const productList = document.getElementById("product-list");
  products.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}€</p>
      <button onclick="addtoCart('${product.name}',${product.price})" class="addbutton">Zum Warenkorb hinzufügen</button>
    `;
    productList.appendChild(div);
  });
}
showProducts(products); // Zeigt mir die Produkte an von let products







/*Index ist eine Zahl
${} ist ein Platzhalter, eine Stelle wo etwas ersetzt wird bsp der Produktname, zugehöriges Bild erscheint hier
`` <- template strings, darin können wir beliebigen text schreiben und eine variable direkt im text einfügen
Neues Produkt hinzufügen*/
