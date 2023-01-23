import React from "react";
import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";
import BlogList from "./BlogList";

export default function Blog() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection("blog")
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setError("No blog entries available");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {data && <BlogList blogs={data} />}
    </div>
  );
}
