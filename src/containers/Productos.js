import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import { Button, Col, Container, Row } from 'react-bootstrap';

import List from '../components/List';
// snippet sfc
// snippet nfn
// snippet usf (Simple react snippets - Burke Holland)

// REVISAR FILTRO EN LA LLAMADA A LA API

const Productos = () => {
  const [data, setData] = useState([]);
  const mostrar9Productos = () => {
    const response = axios.get('https://www.amiiboapi.com/api/amiibo/');
    response.then(
      result => {
        const filteredData = result.data.amiibo.filter((obj, index) =>
          index < 9
        );
        setData(filteredData);
      }
    ).catch(e => {
      console.log('error:', e);
    });
  };
  const mostrarTodo = async () => {
    const response = await axios.get('https://www.amiiboapi.com/api/amiibo/');
    setData(response.data.amiibo);
  };
  // console.log(data);
  console.log(data);
  return (
    <>
      {/* <Container fluid> */}
            <Button variant="outline-danger" onClick={mostrar9Productos}>
              Actualizar then
            </Button>
        {/* <Row> */}
          {/* <Col>
            1 of 2
            <div>
              {data.map((product, index) => {
                if (index < 5) {
                  return <List index={index} product={product} />;
                } else {
                  return <div></div>;
                }
              })}
              </div>
            </Col> */}
          {/* <Button onClick={mostrarTodo}>
            Actualizar async/await
          </Button> */}
          {/* <Col>2 of 2
          <div>
          {data.map((product, index) => {
            if (index >= 5) {
              return <List index={index} product={product} />;
            } else {
              return <div></div>;
            }
          })}
          </div>
        </Col> */}
        {/* </Row> */}
        <Row xs={1} md={3} className="g-4">
        {data.map((product, index) => (
          <Col>
           <List index={index} product={product} />
           </Col>
        ))}
        </Row>
        {/* <Button onClick={mostrarTodo}>
          Actualizar async/await
        </Button> */}
      {/* </Container> */}
    </>
  );
};

export default Productos;
