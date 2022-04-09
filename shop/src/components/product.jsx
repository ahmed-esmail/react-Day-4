import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Product({ prodItem, deleteById, addToCart }) {
  let [selected, setSelected] = useState(false);
  const navigate = useNavigate();
  let navigateToEdit = () => {
    navigate(`product/edit/${prodItem.id}`);
  };

  return (
    <>
      <tr>
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
            style={{ cursor: "pointer", color: "blue" }}
            onClick={() => {
              addToCart(prodItem);
              setSelected(!selected);
            }}
          />
          <i
            className="fa-solid fa-trash ms-2 "
            style={{ cursor: "pointer", color: "red" }}
            onClick={() => deleteById(prodItem.id)}
          />
        </td>
      </tr>
    </>
  );
}

export default Product;
