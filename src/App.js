import './categories.styles.scss';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Hats',
    },
    {
      id: 3,
      title: 'Hats',
    },
    {
      id: 4,
      title: 'Hats',
    }
  ]
  
  return (
    <div className="categories-container">
      {categories.map(({id, title}) => (
        <div className="category-container" key={id}>
          {/* <img /> */}
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
