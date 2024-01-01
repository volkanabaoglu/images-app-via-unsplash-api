import "./App.css";
import Search from "./Search";
import searchImages from "./api";
import { useState } from "react";
import ImageList from "./ImageLıst";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className="App">
      <div>
        <div className="search-bar">
          <Search search={handleSubmit} />
        </div>

        <div className="content">
          <ImageList imagesPlaceHolder={images} />
        </div>
      </div>
    </div>
  );
}

export default App;
