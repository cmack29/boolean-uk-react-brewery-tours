import { useEffect, useState } from "react";
import BreweriesList from "./components/BreweriesList";
import Filters from "./components/Filters";
import Header from "./components/Header";

export default function App() {
  const [breweriesData, setBreweriesData] = useState([]);
  const [stateInput, setStateInput] = useState("");
  // const [stateSubmit, setStateSubmit] = useState(null);
  const [userInput, setUserInput] = useState([]);
  // const [checkBox, setCheckBox] = useState([]);
  const [filter, setFilter] = useState();
  console.log("Inside State: ", { userInput, breweriesData, stateInput });

  function fetchBreweries() {
    fetch(
      `https://api.openbrewerydb.org/breweries?by_state=${userInput}&per_page=50`
    )
      .then((resp) => resp.json())
      .then((breweriesData) => setBreweriesData(breweriesData));
    // console.log("state: ", stateInput);
  }

  const handleStateSubmit = (event) => {
    // console.log("Inside handleStateSubmit: ", handleStateSubmit);
    event.preventDefault();
    fetchBreweries();
  };

  const handleUserInput = (event) => {
    // console.log("Inside handleNameInput: ", event.target.value);

    setUserInput(event.target.value);
  };

  const types = ["micro", "brewpub", "regional"];

  const filterSectionByType = breweriesData.filter((brewery) => {
    return types.includes(brewery.brewery_type);
  });
  console.log("filered brewery by type: ", filterSectionByType);

  const handleFilter = (event) => {
    // console.log("Inside handlefilter: ", event.target.value);
    breweriesData
      .filter((brewery) => brewery.city === event.target.value)
      .map((filteredBreweries) => filteredBreweries);

    setFilter(event.target.value);
  };

  const handleSearchBrewery = (event) => {
    event.preventDefault();

    setStateInput(event.target.value);
  };

  return (
    <>
      <Header
        handleUserInput={handleUserInput}
        handleStateSubmit={handleStateSubmit}
        userInput={userInput}
      />
      <main>
        <h1>List of Breweries from </h1>
        <header className="search-bar">
          <form
            onSubmit={() => {}}
            id="search-breweries-form"
            autocomplete="off"
          >
            <label for="search-breweries">
              <h2>Search breweries:</h2>
            </label>
            <input
              onChange={handleSearchBrewery}
              value={stateInput}
              id="search-breweries"
              name="search-breweries"
              type="text"
            />
          </form>
        </header>
        <BreweriesList breweriesData={breweriesData} />
        <Filters
          breweriesData={breweriesData}
          filterSectionByType={filterSectionByType}
          handleFilter={handleFilter}
        />
      </main>
    </>
  );
}
