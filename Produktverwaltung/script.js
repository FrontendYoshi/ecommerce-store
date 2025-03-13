//Produktklasse
class Product {
    constructor(name, price) {
        this.name = name; //Wieso streicht er das name durch
        this.price = price;
    }

    formatPrice() {
        return '${this.price.toFixed(2)}€';
    }
}

//Produktverwaltungsklasse-Wie ein Spielleiter, der alles überwacht
class ProductManager {
    constructor{
        this.products = [];
        this.loadProducts();
        this.initializeEventlisteners();

    }
   

    