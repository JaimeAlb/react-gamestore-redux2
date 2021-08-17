import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import CardCustom from '../components/CardCustom';
import ModalCustom from '../components/UI/ModalCustom';
import SpinnerCustom from '../components/UI/SpinnerCustom';
//  nfn named function - JavaScript (ES6) code snippets
//  anfn anonymous function () => {} - JavaScript (ES6) code snippets
//  sfc stateless function component - Simple React Snippets - Burke Holland
//  usf Declare a new state variable using State Hook- Simple React Snippets - Burke Holland
//  uef useEffect Hook - Simple React Snippets

// REVISAR FILTRO EN LA LLAMADA A LA API
// 1, 2, 3, 1, 4
// GATILLAR UN MODAL CUANDO LA DATA DE AMIIBO SE TRAIGA AL HACER CLICK EN ACTUALIZAR, MODAL: SU DATA HA SIDO ACTUALIZADA
// AL APRETAR COMPRAR APAREZCA UN CARRO DE COMPRA EN EL NAVBAR, Y QUE APAREZCA UN NUMERO QUE AUMENTE SUCESIVAMENTE A MEDIDA QUE SE APRETA EL BOTON COMPRAR
// FIN PRIMERA ETAPA
// 2DA ETAPA: AGREGAR DETALLES DE CARRO DE COMPRA, NUEVA PAGINA

const Productos = () => {
  const [data, setData] = useState([]);
  const [isSpinnerActive, setIsSpinnerActive] = useState(false);
  const [modal, setModal] = useState(false);
  const [productsNumber, setProductsNumber] = useState(3);

  // useEffect(() => {
  //   document.title = productsNumber;
  // });

  // useEffect(() => {
  //   // console.log('[x:4]se ejecuto el 2do useEffect');
  //   if (data.length > 0) { console.log('[x:5]su data ha sido cargada'); }
  // }, [data]);
  const increaseProductNumber = () => {
    setProductsNumber(productsNumber + 1);
    // showProducts();
  };
  const decreaseProductNumber = () => {
    setProductsNumber(productsNumber - 1);
    // showProducts();
  };

  const showProducts = async (option) => {
    console.log(axios.get('https://www.amiiboapi.com/api/amiibo/'));
    setIsSpinnerActive(true);
    console.log('[y]option:', option);
    const response = await axios.get('https://www.amiiboapi.com/api/amiibo/');
    const filteredData = response.data.amiibo.filter((obj, index) =>
      index < productsNumber
    );
    setData(filteredData);
    if (option) {
      setModal(false);
    }
    setIsSpinnerActive(false);
  };
  useEffect(() => {
    console.log('[x:2]se ejecuto el useEffect');
    showProducts();
  }, [productsNumber]);

  // console.log(data);
  console.log('[x:2]productsNumber antes de return:', productsNumber);
  const handleClose = () => setModal(false);
  return (
    <>
      <Button onClick={() =>
        increaseProductNumber()
      }>+</Button>
      <Button onClick={() =>
        decreaseProductNumber()
      }>-</Button>
      <span>{productsNumber}</span>
      {
    isSpinnerActive
      ? <SpinnerCustom variantColor="danger" animation="grow" />
      : <Button variant="outline-danger" onClick={() => showProducts(true)}>
          Show Products
        </Button>
      }
      {<ModalCustom show={modal} handleClose={handleClose} />}
      <Row xs={1} md={3} className="g-4">
        {data.map((product, index) => (
          <Col>
            <CardCustom index={index} product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Productos;
