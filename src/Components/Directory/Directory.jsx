import CategoryItem from "../Category-item/Category-item";
import "./Directory.scss";
const Directory = ({ categories }) => {
  return (
    <div className="main-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default Directory;
