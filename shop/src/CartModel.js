const URL = "http://localhost:3000/cart";

let CartCRUD = {
  getAll: () => {
    return fetch(URL);
  },
  addProductToCart: (newProduct) => {
    fetch(URL, {
      method: "post",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(newProduct),
    });
  }
}

export default CartCRUD
