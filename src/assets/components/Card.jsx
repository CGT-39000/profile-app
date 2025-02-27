import PropTypes from "prop-types";
import style from "../../styles/card.module.css";

const Card = ({ image_url, name, title, email }) => {
  return (
    <div className={`${style["profile-card"]} ${style["is-entering"]}`}>
      <div className="profile-card__image">
        <img src={image_url} alt="profile image"></img>
      </div>
      <div className="profile-card__content">
        <p>{name}</p>
        <p>{title}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};
Card.propTypes = {
  image_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  email: PropTypes.string.isRequired,
};

export default Card;
