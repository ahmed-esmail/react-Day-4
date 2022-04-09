const URL = "http://localhost:3000/cart";

let CartCRUD = {
  getAll: () => {
    return fetch(URL);
  },
  addProductToCart: (newProduct) => {
    return fetch(URL, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newProduct),
    });
  },
  deleteById(_id) {
    return fetch(`${URL}/${_id}`, {
      method: "delete",
      headers: { "content-type": "application/json" },
    });
  },
};

export default CartCRUD;
