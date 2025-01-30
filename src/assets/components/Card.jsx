import PropTypes from "prop-types";
import style from '../../styles/card.module.css';

const Card = ({ img, name, title, email, animate, updateAnimate }) => {
  return (
    <div className={`${style["profile-card"]} ${animate ? style["is-entering"] : ""}`} onAnimationEnd={updateAnimate}>
      <div className="profile-card__image">
        <img src={img} alt="profile image"></img>
      </div>
      <div className="profile-card__content">
        <p>{name}</p>
        <p>{title}</p>
        <p>
          <a href={"mailto:$(email)"}>{email}</a>
        </p>
      </div>
    </div>
  );
};
Card.propTypes = {
  animate: PropTypes.bool.isRequired,
  updateAnimate: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  email: PropTypes.string.isRequired,
};

export default Card;
