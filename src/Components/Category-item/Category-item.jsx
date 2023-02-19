import "./Category-item.sytle.scss";
const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="text-container">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </div>
  );
};
export default CategoryItem;
