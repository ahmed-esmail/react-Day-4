import {Table, Button, Form} from "react-bootstrap";
import {useState, useEffect} from "react";
import ProductsCRUD from "../ProductModel";
import {useNavigate, useParams} from "react-router-dom";

function ProductEdit() {
  const [values, setValues] = useState({
    id: 0,
    name: "",
    image: "",
    category: "",
    type: "",
    price: 0,
  });
  const navigate = useNavigate();

  let {id} = useParams();
  const handleChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value});
  };

  useEffect(() => {
    console.log(id);
    ProductsCRUD.getById(id)
      .then((res) => res.json())
      .then((res) => setValues(res));
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    ProductsCRUD.updateById(id, values).then((res) => console.log(res));
    navigate("/");
  };

  return (
    <div className="container w-50">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>id</Form.Label>
          <Form.Control
            value={values.id}
            name="id"
            type="number"
            placeholder="id Of product"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={values.name}
            name="name"
            type="Name"
            placeholder="Name Of product"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>image</Form.Label>
          <Form.Control
            name="image"
            value={values.image}
            type="file"
            placeholder="image Of product"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            value={values.price}
            type="number"
            placeholder="Price Of product"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Category</Form.Label>
          <Form.Control
            name="category"
            value={values.category}
            type="Name"
            placeholder="Category Of product"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Type</Form.Label>
          <Form.Control
            name="type"
            value={values.type}
            type="Name"
            placeholder="Type Of product"
            onChange={(e) => handleChange(e)}
          />
          <button className="btn btn-warning mt-2" type="submit">
            Save Data
          </button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default ProductEdit;
