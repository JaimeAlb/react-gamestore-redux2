import { Spinner } from 'react-bootstrap';

const SpinnerCustom = (props) => {
  console.log('props:', props);
  const { variantColor, animation } = props; // object destructuring
  // const variantColor = props.variantColor;
  return (
    <Spinner role="status" variant={variantColor} animation={animation}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default SpinnerCustom;
