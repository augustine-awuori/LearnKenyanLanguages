import { useEffect, useState } from "react";

export default function UseApi(apiFunc) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(apiFunc());
  }, [apiFunc]);

  return { data };
}
