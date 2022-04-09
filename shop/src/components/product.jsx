import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProductsCRUD from "../ProductModel";
import CartCRUD from "../CartModel";
import { useState } from "react";

function Product({ prodItem, refGetAllProducts }) {
  const navigate = useNavigate();
  let navigateToEdit = () => {
    navigate(`product/edit/${prodItem.id}`);
  };

  let deleteById = (_id) => {
    ProductsCRUD.deleteById(_id);
    refGetAllProducts();
  };

  let addToCart = (product) => {
    CartCRUD.addProductToCart(product).then((res) => console.log(res));
  };
  return (
    <tr>
      <style>{`
        .red {color: red}
        .green {color: green}
      `}</style>
      <td>{prodItem.id}</td>
      <td>{prodItem.name}</td>
      <td>
        <img src={prodItem.img} width="90px" alt="productImage" />
      </td>
      <td>${prodItem.price}</td>
      <td>{prodItem.category}</td>
      <td>{prodItem.type}</td>
      <td>
        <i
          className={"fa-solid fa-pencil"}
          style={{ cursor: "pointer" }}
          onClick={navigateToEdit}
        />
        <i
          className="fas fa-shopping-cart ms-2"
          style={{ cursor: "pointer" }}
          onClick={() => addToCart(prodItem)}
        />
        <i
          className="fa-solid fa-trash ms-2 "
          style={{ cursor: "pointer" }}
          onClick={() => deleteById(prodItem.id)}
        />
      </td>
    </tr>
  );
}

export default Product;
