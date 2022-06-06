import PropTypes from "prop-types";
import "./headerListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HeaderListItem = ({ icon, text, active }) => {
  return (
    <div className={active ? "headerListItem active" : "headerListItem"}>
      <FontAwesomeIcon icon={icon} />
      <span>{text}</span>
    </div>
  );
};

HeaderListItem.propTypes = {
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default HeaderListItem;
