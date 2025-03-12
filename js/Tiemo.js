// Erstellen eines leeren Warenkorbs als Array
let cart = [];

//Funktion zum Hinzufügen von Produkten zum Warenkorb
function addToCart(name, price) {
    //Prüfen, ob das Produkt bereits im Warenkorb ist
    let existingProductIndex = findProductIndex(name);

    if (existingProductIndex !== -1) {
        //Wenn das Produkt im Warenkorb ist, erhöhe die Menge
        cart[existingProductIndex].quantity += 1;
    } else {
        //Wenn nicht, füge ein neues Produkt mit Menge 1 hinzu
        let product = {
            name: productName,
            price: price,
            quantity: 1
        };
        cart.push(product);
    }
    //Warenkorb anzeigen aktualisieren
    displayCart();

    //Animation oder Feedback hinzufügen (optional)
    showAddedFeedback(produname);
}

//Hilfsfunktion zum Finden eines Produkts im Warenkorb
function findProductIndex(name) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            return i;
        }
    }
    return -1 // Produkt nicht gefunden}
}

//Funktion zum Entfernen von Produkten aus dem Warenkorb
function removeFromCart(index) {
    //Element an der angegebenen Position entfernen
    cart.splice(index, 1)

    //Warenkorb anzeigen aktualisieren
    displayCart();
}
//Funktion zum Ändern der Produktmenge
function changeQuantity(index, change) {
    //neue Menge berechnen
    let newQuantity = cart[index].quantity + change;
    if (newQuantity <= 0) {
        //Wenn die Menge 0 oder weniger wird, Produkt entfernen
        removeFromCart(index);
    }
    else {
        //sonst Menge aktualisieren
        cart[index].quantity = newQuantity;
        displayCart();
    }
}
//Funktion zur Berechnung der Gesamtsumme
function calculateTotal() {
    let total = 0;

    //Für jedes Produkt im Warenkorb
    cart.forEach(function (product) {
        //Preis x Menge zum Gesamtbetrag addieren
        total = total + (product.price * product.quantity);
    });
    //Gesamtsumme auf zwei Dezimalstellen runden
    return total.toFixed(2);
}
// Funktion zur Anzeige des Warenkorbs
function displayCart() {
    //HTML-Element für den Warenkorb abrufen
    let cartElement = document.getElementById("cart-items");

    //Warenkorb leeren
    cartElement.innerHTML = "";
    
    //Wenn der Warenkorb leer ist, entsprechende Meldung zeigen
    if (cart.length === 0) {
        cartElement.innerHTML = "<p>Dein Warenkorb ist leer.</p>"
    }
    else {
        //Für jedes Produkt im Warenkorb
        cart.forEach(function(product,index){
            //Neues Div für das Warenkorb-Element erstellen
            let item = document.createElement("div");
            item.className = "cart-item";
        })
    }
}
/*const addbutton = document.getElementById('add-task-button');
addbutton.addEventListener(`click`,addTask);*/