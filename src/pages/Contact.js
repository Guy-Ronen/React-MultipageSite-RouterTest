import { useLocation } from "react-router-dom";

const Contact = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);

  const name = queryParams.get("name");

  return (
    <div>
      <h2>Hey {name}, Contact us through here:</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat et
        ullam facilis, deleniti earum cum nobis ratione quis pariatur, saepe
        accusamus, ex dicta voluptatibus velit id exercitationem praesentium
        magni. Sunt?
      </p>
    </div>
  );
};

export default Contact;
