import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import { useEffect, useState } from "react";

function App() {
  const [datas, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("../data.json");
      if (!response.ok) {
        throw new Error("Network Error!");
      }
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setError("Network Error!");
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  },[]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home isLoading={isLoading} error={error} datas={datas}/>} />
          <Route path="detail/:id" element={<Detail isLoading={isLoading} error={error} datas={datas}/>} />
          <Route path="/:search" element={<Search isLoading={isLoading} error={error} datas={datas}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
