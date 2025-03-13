let cart = [];
let products = [
    { name: "Hundespielzeug Erdmännchen", price: 7.99, image: "assets/Erdmännchen.png" },
    { name: "Hundespielzeug Eule", price: 6.99, image: "assets/Eule.png" },
    { name: "Hundespielzeug Geier", price: 6.37, image: "assets/Geier.png" },
    { name: "Hundespielzeug Plüschblume", price: 4.99, image: "assets/Plüschblume.png" },
]

// jmd klickt auf den button, es wird ein neues objekt erstellt und dem warenkorb hinzugefügt
function addtoCart(name, price) {
    cart.push({
        name: name,
        price: price,
    });

    showCart(cart); // Warenkorb anzeigen
};
// Funktion um Warenkorb anzeigen zu können
function showCart(cart) {
    // ich finde meinen <div> hier Warenkorb, speicher mir es als Konstante
    const cartItems = document.getElementById("cart-items")
    //für jedes Objekt im Cart erzeugen wir HTML(Inhalt für den Warenkorb)
    //forEach durchläuft jedes Element einzeln..wir sagen welche Funktion für
    //jedes Element ausgeführt werden soll
    cart.forEach(product => {
        const div = document.createElement("div")// Element <div> erstellen und als Konstante speichern
        div.innerText = product.name + " " + product.price + "€" // ins div schreibe ich Name und Preis vom Produkt
        cartItems.appendChild(div)

    });

};

function showProducts(products)//fn-Taste+F2 Feld öffnet sich, wo ich die Variable für "überall"ändern kann
{
    const productList = document.getElementById("product-list")
    products.forEach(product => {
        const div = document.createElement("div")
        div.innerHTML = ` 
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button onclick="addtoCart('${product.name}',${product.price})" class="addbutton">Zum Warenkorb hinzufügen</button>
        `
        //innerHTML anstatt innerText, damit ich das, was in meiner kompletten HTML diesbezüglich steht verwendet werden kann
        productList.appendChild(div)

    });
    
};
showProducts(products);//zeigt mir die Produkte an von let products


function removeFromCart (cart){
    cart.splice(index)
}
// ${} ist ein Platzhalter, eine Stelle wo etwas ersetzt wird bsp der Produktname, zugehöriges Bild erscheint hier
// `` <- template strings, darin können wir beliebigen text schreiben und eine variable direkt im text einfügen
/*// Neues Produkt hinzufügen
addProduct(tableBody){
    const name = document.getElementById('productName');
    const price = document.getElementById('productPrice')
    const product = newProduct(name, price);
    this.products.push;
}


//Produkt löschen



//Produkte anzeigen
displayProducts(){
    const tableBody = document.getElementById('productTableBody')
    tableBody.innerHTML = '';
}*/