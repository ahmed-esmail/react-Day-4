const URL = "http://localhost:3000/products";

let ProductsCRUD = {
  getAll: () => {
    return fetch(URL);
  },
  addProduct: (newProduct) => {
    fetch(URL, {
      method: "post",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(newProduct),
    });
  },
  getById: (_id) => {
    return fetch(`${URL}/${_id}`);
  },
  updateById(_id, newProduct) {
    return fetch(`${URL}/${_id}`, {
      method: "put",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(newProduct),
    });
  },
};

export default ProductsCRUD;
