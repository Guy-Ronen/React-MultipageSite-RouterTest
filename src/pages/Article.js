import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "../hooks/UseFetch";

export default function Article() {
  const { id } = useParams();
  const url = `http://localhost:3000/articles/${id}`;
  const history = useHistory();
  const { data: article, isPending, error } = useFetch(url);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 1500);
    }
  }, [error, history]);

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>By - {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}
