import React from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Card from '../components/Card'
import SearchInput from "../components/SearchInput";

function Home({ isLoading, error, datas }) {
  return (
    <>
    <SearchInput/>
    {error && <Error error={error}/>}
    {isLoading && <Loading/>}
    {!isLoading && !error && <Card datas={datas}/>}
    </>
  );
}

export default Home;
