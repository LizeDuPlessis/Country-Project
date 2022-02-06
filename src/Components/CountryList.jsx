function CountryList({ country, handleShowMore, showMore }) {
  return (
    <>
      <div className="country-list">
        <h2>{country.name.common}</h2>
        <h2>Population: {country.population}</h2>
        <img src={country.flags.png} alt="flags" />
        <button onClick={handleShowMore}>Show Info</button>
        {showMore && (
          <div>
            <h5>Continent: {country.continents}</h5>
            <h5>Drive side: {country.car.side}</h5>
          </div>
        )}
      </div>
    </>
  );
}

export default CountryList;
