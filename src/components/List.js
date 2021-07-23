import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Card, ListGroup } from 'react-bootstrap';

const List = ({ index, product }) => {
  // const { index, product } = props; //destructuracion de objetos
  return (
  // <ListGroup key={index + 'product'} id={index}>
  //   <ListGroup.Item>
  //   <h2 key={index + 'name'}>{product.name} </h2>
  //   <img key={index + 'imagen'} src={product.image} alt=""></img>
  //   </ListGroup.Item>
  // </ListGroup>);
  <Card bg = "dark" border="light" text = "white" style={{ width: '20rem' }} key={index + 'product'} id={index}>
    <div ><Card.Img width="10%" variant="top" src={product.image} /></div>
    <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>{product.amiiboSeries} - {product.type}</Card.Text>
    <Button variant="primary">Comprar</Button>
    {/* <h2 key={index + 'name'}>{product.name} </h2> */}
    {/* <img key={index + 'imagen'} src={product.image} alt=""></img> */}
    </Card.Body>
  </Card>);
};
export default List;
