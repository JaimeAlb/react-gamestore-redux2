import Productos from '../../containers/Productos';

function Home (props) {
  const { onCartNumber } = props;
  return (
    <div>
      <Productos onCartNumber={onCartNumber} />
    </div>
  );
}

export default Home;
