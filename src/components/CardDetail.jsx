import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CardDetail({ id, datas }) {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState([]);
  const blogFilter = datas.BlogDetail.filter((blog) => {
    return blog.BlogId === parseInt(id);
  });
  const blogTitle = datas.BlogHeader.find((blog) => {
    return blog.BlogId === parseInt(id);
  });
  useEffect(() => {
    setDetail(blogFilter);
    setTitle(blogTitle.BlogTitle)
  }, [datas, id]);
  return (
    <div className="container mt-4 mb-4">
        <div className="text-center mb-4">
         <h1 className="">{title}</h1>
         <Link className="fs-5 text-decoration-none" to={'/'}>မူလစာမျက်နှာသို့</Link>
        </div>
       
      {detail.map((data) => {
        return (
            <div key={data.BlogDetailId}>
            <div className="py-4 px-3 border">
              <div className="text-muted mb-2">No: <span className="ms-1">{data.BlogDetailId}</span></div>        
              <p className="mb-0">{data.BlogContent}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardDetail;
