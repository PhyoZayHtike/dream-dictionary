import React, { useEffect, useState } from "react";
import Error from "./Error";
import { Link, useNavigate } from "react-router-dom";

function SearchDetail({ datas, search }) {
  const navigate = useNavigate();
  const [results, setResult] = useState([]);
  const [counter, setCounter] = useState(3);
  useEffect(() => {
    const blogFilter = datas.BlogDetail.filter((blog) => {
      return blog.BlogContent.toLowerCase().includes(search.toLowerCase());
    });
    setResult(blogFilter);
  }, [datas, search]);

  useEffect(() => {
    if (results.length === 0) {
      const delayTimeout = setTimeout(() => {
        navigate("/");
      }, 3000);

      const interval = setInterval(() => {
        setCounter((counter) => counter - 1);
      }, 1000);

      return () => {
        clearTimeout(delayTimeout);
        clearInterval(interval);
      };
    }
  }, [results, navigate]);

  return (
    <div className="container mt-5 mb-4">
      {results.length === 0 ? (
        <Error error={`ရှာလို့မတွေ့ပါ။ ${counter}`} />
      ) : (
        <>
          <div className="text-center mb-4">
            <h1 className="mb-3 text-muted">
              သင်ရှာဖွေလိုသောအကြောင်းအရာ - {search}
            </h1>
            <Link className="fs-4 text-decoration-none" to={"/"}>
              မူလစာမျက်နှာသို့
            </Link>
          </div>
          {results.map((result) => {
            return (
              <div className="" key={result.BlogDetailId}>
                <div className="py-4 px-3 border">
                  <div className="text-muted mb-2">
                    No: <span className="ms-1">{result.BlogDetailId}</span>
                  </div>
                  <p className="mb-0">{result.BlogContent}</p>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default SearchDetail;
