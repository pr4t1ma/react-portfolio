import { Link } from "react-router-dom";
export const Error = () => {
  return (
    <div>
      <h2>Error</h2>
      <p>Link not found</p>
      <Link to="./">Back to the home page</Link>
    </div>
  );
};
