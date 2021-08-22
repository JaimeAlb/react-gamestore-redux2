import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Card } from 'react-bootstrap';

const CardCustom = (props) => {
  const { index, product, onProductArray } = props; // destructuracion de objetos
  const handleClick = () => {
    onProductArray(product);
  };
  return (
    <Card bg="dark" border="light" text="white" style={{ width: '20rem' }} key={index + 'product'} id={index}>
      <div ><Card.Img width="10%" variant="top" src={product.image} /></div>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.amiiboSeries} - {product.type}</Card.Text>
        <Button variant="primary" onClick={handleClick}>Comprar</Button>
      </Card.Body>
    </Card>);
};
export default CardCustom;
