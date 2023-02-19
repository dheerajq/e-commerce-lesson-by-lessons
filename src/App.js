const categories = [
  {
    title: "hates",
    id: "1",
  },
  {
    title: "jackets",
    id: "1",
  },
  {
    title: "Snekers",
    id: "3",
  },
  {
    title: "Womens",
    id: "4",
  },
  {
    title: "Mens",
    id: "5",
  },
];
const App = () => {
  return (
    <div className="main-container">
      <h1>this is dheeraj</h1>
      {categories.map(({ title }) => (
        <div className="category-container">
          <div className="text-container">
            <h2>{title}</h2>
            <p>shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
