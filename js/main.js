let cart = [];

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


