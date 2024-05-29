import { useState, useEffect } from "react";

const UseCustomData = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((doc) => setData(doc));
  });


  return [data];
};

export default UseCustomData;
