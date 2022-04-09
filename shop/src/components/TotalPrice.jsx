const Total = ({ products }) => (
  <h4>
    Price:$
    {products.reduce((sum, i) => (sum += i.price), 0).toFixed(2)}
  </h4>
);

export default Total;
