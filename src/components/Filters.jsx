export default function Filters(props) {
  const { breweriesData } = props;
  return (
    <aside className="filters-section">
      <h2>Filter By:</h2>
      <form id="filter-by-type-form" autocompete="off">
        <label for="filter-by-type">
          <h3>Type of Brewery</h3>
        </label>
        <select
          onClick={props.handleFilter}
          name="filter-by-type"
          id="filter-by-type"
        >
          <option value="">Select a type...</option>
          <option value="micro">Micro</option>
          <option value="regional">Regional</option>
          <option value="brewpub">Brewpub</option>
        </select>
      </form>
      <div className="filter-by-city-heading">
        <h3>Cities</h3>
        <button className="clear-all-btn">clear all</button>
      </div>
      <form id="filter-by-city-form">
        {breweriesData.map((breweryData) => {
          const { city } = breweryData;
          return (
            <>
              <input type="checkbox" name={city} value={city} />
              <label for={city}>{breweryData.city}</label>
            </>
          );
        })}
      </form>
    </aside>
  );
}
