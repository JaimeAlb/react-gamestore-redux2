import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Card } from 'react-bootstrap';

const CardCustom = (props) => {
// const CardCustom = ({ index, product }) => {
  const { index, product } = props; // destructuracion de objetos
  return (
  <Card bg = "dark" border="light" text = "white" style={{ width: '20rem' }} key={index + 'product'} id={index}>
    <div ><Card.Img width="10%" variant="top" src={product.image} /></div>
    <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>{product.amiiboSeries} - {product.type}</Card.Text>
    <Button variant="primary">Comprar</Button>
    </Card.Body>
  </Card>);
};
export default CardCustom;
