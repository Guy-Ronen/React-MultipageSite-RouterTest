import useFetch from "../hooks/UseFetch";
import { Link } from "react-router-dom";

//styles
import "./Home.css";

const Home = () => {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:3000/articles");
  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {articles &&
        articles.map((article) => (
          <div key={article.id} className="card">
            <h2>{article.title}</h2>
            <p>{article.author}</p>
            <Link to={`/articles/${article.id}`}>Click for more...</Link>
          </div>
        ))}
    </div>
  );
};

export default Home;
