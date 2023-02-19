import "./Categories.style.scss";
const categories = [
  {
    id: "1",
    title: "hates",
  },
  {
    id: "2",
    title: "jackets",
  },
  {
    id: "3",
    title: "Snekers",
  },
  {
    id: "4",
    title: "Womens",
  },
  {
    id: "5",
    title: "Mens",
  },
];
const App = () => {
  return (
    <div className="main-container">
      {categories.map(({ title, id }) => (
        <div key={id} className="category-container">
          <div className="text-container">
            <h2>{title}</h2>
            <p>shop now</p>
          </div>
        </div>
      ))}
      {/* <p>dheeraj</p> */}
    </div>
  );
};

export default App;
