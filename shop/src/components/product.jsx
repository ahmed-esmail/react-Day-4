import { useNavigate } from "react-router-dom";

function Product({ prodItem, getAllProduct, deleteById, addToCart }) {
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
            getAllProduct={getAllProduct}
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
    </>
  );
}

export default Product;
