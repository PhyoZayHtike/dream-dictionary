import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();
    if (searchKey) {
      navigate(`/${searchKey}`);
    }
  };
  return (
    <div className="container mt-5">
      <p className="fs-4 col-lg-10 text-center m-lg-auto">
        မြင်မက်ခဲ့သောအိပ်မက်ထဲမှ အဓိကဇာတ်ကောင်များ (သို့) အရာဝတ္ထုများကို
        မြန်မာစာလုံးပေါင်းဖြင့် အောက်ပါအကွက်လေးထဲ ထည့်ပါ။
      </p>
      <form
        onSubmit={search}
        className="d-flex col-10 col-md-6 col-lg-4 m-auto mt-2"
      >
        <input
          className="form-control rounded-end-0"
          type="text"
          placeholder="ကခ"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button className="btn btn-primary rounded-start-0">Search</button>
      </form>
    </div>
  );
}

SearchInput.propTypes = {};

export default SearchInput;
