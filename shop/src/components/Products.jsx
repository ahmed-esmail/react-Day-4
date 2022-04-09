import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import CartCRUD from "../CartModel";

import ProductsCRUD from "../ProductModel";
import Product from "./product";

function Products() {
  let [prodList, setProdList] = useState([]);

  let getAllProduct = () => {
    ProductsCRUD.getAll()
      .then((data) => data.json())
      .then((res) => setProdList(res));
  };

  let deleteById = (_id) => {
    ProductsCRUD.deleteById(_id);
    getAllProduct();
    toast("delete Product SuccessFully 👌");
  };

  let addToCart = (product) => {
    CartCRUD.addProductToCart(product)
      .then((res) => res.json())
      .then((data) => console.log(data));
    toast("Product Added to Cart successfully 👌");
  };
  useEffect(getAllProduct, [prodList]);

  return (
    <>
      <ToastContainer />

      <div className="container my-4">
        <Button variant="primary" className="d-flex my-3">
          <Link to="product/add" className="text-white">
            Add Product
          </Link>
        </Button>
        <Outlet />
        <Table striped bordered hover className="container">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Category</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {prodList.map((item) => (
              <Product
                getAllProduct={getAllProduct}
                deleteById={deleteById}
                addToCart={addToCart}
                key={item.id}
                prodItem={item}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Products;
