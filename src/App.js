import "./index.css";
import Header from "./Components/Header";
import { useState, useEffect } from "react";
import CountryList from "./Components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [userSearched, setUserSearched] = useState("");

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  const handleSubmitSearch = (e) => {
    try {
      const getSearchCountries = async () => {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${userSearched}`
        );
        const data = await res.json();
        setCountries(data);
      };
      getSearchCountries();
      // if the try fails do this err
    } catch (err) {
      console.error(err);
    }
    e.preventDefault();
  };

  useEffect(() => {
    // try to create a function getCountries then call the function
    try {
      const getCountries = async () => {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
      };
      getCountries();
      // if the try fails do this err
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="container">
      <Header />
      <main>
        <div className="input-group">
          <h1>{userSearched}</h1>
          <form onSubmit={handleSubmitSearch}>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setUserSearched(e.target.value)}
            />

            <button type="submit">Submit</button>
          </form>
        </div>
        {countries?.map((country) => (
          <CountryList
            key={country.id}
            country={country}
            handleShowMore={handleShowMore}
            showMore={showMore}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
