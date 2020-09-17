import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Recipe from "./components/Recipe";

function App() {
  const APP_Id = "abe6dca4";
  const APP_KEY = "aeba6ecfe613b5333d9d2adf20ec4a8f";
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const getRecipes = async () => {
    const URI = `https://api.edamam.com/search?q=${query}&app_id=${APP_Id}&app_key=${APP_KEY}`;
    const response = await axios.get(URI);
    const data = await response.data;
    console.log(data);
    setItems(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="Container">
      <section className="search">
        <form onSubmit={getSearch}>
          <input
            type="text"
            className="form-control"
            value={search}
            onChange={updateSearch}
          />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </section>

      <section className="cards">
        {items.map((item) => (
          <Recipe
            key={item.recipe.label}
            title={item.recipe.label}
            calories={item.recipe.calories}
            img={item.recipe.image}
            ingredients={item.recipe.ingredients}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
