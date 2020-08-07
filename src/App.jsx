import React, { useEffect, useState } from "react";
import "./App.css";
import { Search } from "./Components/search";
import { Pokemon } from "./Components/pokemon";

const URL_PATH =
  "https://gist.githubusercontent.com/bar0191/fae6084225b608f25e98b733864a102b/raw/dea83ea9cf4a8a6022bfc89a8ae8df5ab05b6dcc/pokemon.json";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL_PATH)
      .then((data) => data.json())
      .then((response) => setData(response));
  }, []);

  const getInputValue = (value) => {
    const filterData = data.filter((pokemon) => {
      const { Types } = pokemon;
      const lowerValue = value.toLowerCase();
      const lowerPokemonName = pokemon.Name.toLowerCase();

      const resultsOfTypes = Types.filter((type) => {
        if (type.toLowerCase().includes(lowerValue)) {
          return true;
        }
        return false;
      });

      if (resultsOfTypes.length > 0) return true;
      if (lowerPokemonName.includes(lowerValue)) return true;
      return false;
    });
    setData(filterData);
    // return filterData;
  };

  const ListOfPokemons = data.map((pokemon) => <Pokemon {...pokemon} />);

  const renderList =
    ListOfPokemons.length > 0 ? (
      ListOfPokemons
    ) : (
      <li>
        <img
          src="https://cyndiquil721.files.wordpress.com/2014/02/missingno.png"
          alt=""
        />
        <div className="info">
          <h1 className="no-results">No results</h1>
        </div>
      </li>
    );

  return (
    <>
      <Search getValue={getInputValue} />
      <div className="loader"></div>
      <ul className="suggestions">{renderList}</ul>
    </>
  );
};

export default App;
