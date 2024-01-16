import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card({ datas }) {
  const [blogHeader, setBlogHeader] = useState([]);
  useEffect(() => {
    setBlogHeader(datas.BlogHeader);
  }, [datas]);
  
  const cleanTitle = (title) => {
    return title.replace(/\[|\]/g, '');
  };

  return (
   <div className="container mt-4 p-4 p-md-0">
     <div className="row">
      {blogHeader.map((header) => {
        return (
              <div key={header.BlogId} className="col-12 col-md-6 col-lg-4">
                <Link to={`detail/${header.BlogId}`} style={{height:"200px",cursor:"pointer"}} className="d-flex justify-content-center flex-column align-items-center border rounded-4 shadow-sm mb-4 border-dark-subtle fs-4 fw-lighter fst-italic text-dark text-decoration-none">{cleanTitle(header.BlogTitle)}</Link>
              </div>
        );
      })}
    </div>
   </div>
  );
}

export default Card;
