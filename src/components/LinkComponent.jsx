import { Link } from "react-router-dom";

const LinkComponent = ({path, label}) => {

  return path == "*" ? ( <></>) : (
    <li>
      <Link to={path}>{label}</Link>
    </li>
  )
};

export default LinkComponent;
