class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1; 
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios");
            return;
        }

        if (this.products.some(product => product.code === code)) {
            console.error("Ya existe un producto con ese código");
            return;
        }

        const newProduct = {
            id: this.nextId++, 
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);
        console.log("Producto agregado:", newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);

        if (product) {
            return product;
        } else {
            console.error("Producto no encontrado");
        }
    }
}


const productManager = new ProductManager();


productManager.addProduct("Producto 1", "Descripción 1", 10, "imagen1.jpg", "001", 50);
productManager.addProduct("Producto 2", "Descripción 2", 20, "imagen2.jpg", "002", 30);
productManager.addProduct("Producto 3", "Descripción 3", 15, "imagen3.jpg", "003", 40);

os
const allProducts = productManager.getProducts();
console.log("Todos los productos:", allProducts);

const productById = productManager.getProductById(2);
console.log("Producto por ID:", productById);
