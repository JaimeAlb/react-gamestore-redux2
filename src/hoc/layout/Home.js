import Products from '../../containers/Products';

function Home (props) {
  const { onCartNumber } = props;
  return (
    <div>
      <Products onCartNumber={onCartNumber} />
    </div>
  );
}

export default Home;
