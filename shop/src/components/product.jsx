import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

function Product({prodItem}) {
  const navigate = useNavigate();
  let navigateTo = () => {
    navigate(`product/edit/${prodItem.id}`);
  };
  return (
    <tr>
      <td>{prodItem.id}</td>
      <td>{prodItem.name}</td>
      <td>
        <img src={prodItem.img} width="90px" alt="productImage"/>
      </td>
      <td>${prodItem.price}</td>
      <td>{prodItem.category}</td>
      <td>{prodItem.type}</td>
      <td>
        <i
          className={"fa-solid fa-pencil"}
          style={{cursor: "pointer"}}
          onClick={navigateTo}
        />
        <i className="fas fa-shopping-cart ms-2"></i>
      </td>
    </tr>
  );
}

export default Product;
