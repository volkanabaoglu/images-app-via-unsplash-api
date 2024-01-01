import { useState } from "react";
import "./Search.css";

const Search = ({ search }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    search(query);
  };

  return (
    <div>
      <form className="form" onSubmit={handleFormSubmit}>
        <label>What are you looking for ?</label>
        <input
          type="text"
          required
          placeholder="car,sea etc."
          value={query}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default Search;
