import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import { Btn } from "../../components/ui/Btn";
import { FormInput } from "../../components/ui/FormInput";
import { MoviesList } from "../../components/moviesList/MoviesList";
import { searchByName } from "../../components/requests";

const MoviesPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchList, setSearchList] = useState([]);
  const history = useHistory();
  const location = useLocation();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (searchValue === "") {
      return;
    } else {
      const form = e.target;
      history.push({
        pathname: location.pathname,
        search: `query=${searchValue}`,
      });
      const data = await searchByName(searchValue);
      setSearchList(data);
      form.reset();
    }
  };

  useEffect(() => {
    const query = queryString.parse(location.search);
    if (!query.query) {
      return;
    } else {
      (async () => {
        const data = await searchByName(query.query);
        setSearchList(data);
      })();
    }
  }, [location.search]);

  return (
    <>
      <form onSubmit={handleSubmitForm} className="form">
        <FormInput
          name="Enter the title"
          handleChange={({ target: { value } }) => {
            setSearchValue(value);
          }}
        />
        <Btn label="search" type="submit" icon="send" />
      </form>
      {location.search && searchList.length > 0 && (
        <MoviesList movies={searchList} />
      )}
    </>
  );
};

export default MoviesPage;
