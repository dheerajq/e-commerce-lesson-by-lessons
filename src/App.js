import Home from "./Routers/Home/Home";
import { Routes, Route } from "react-router-dom";
const Shop = () => {
  return <h1> i am the shop page</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
