import { useRef } from "react";
import classes from "./productCard.module.css";

export const ProductCard = ({ title, image, description }) => {
  const descriptionRef = useRef();

  const showDescription = (e) => {
    e.preventDefault();
descriptionRef.current.classList.toggle(classes.hiddenDescr)
  };
  return (
    <div className={classes.cardContainer}>
      <div>{title}</div>
      <img src={image} alt={title} />
      <button>Добавить в корзину</button>
      <button 
  
      onClick={showDescription}
     >
        show description</button>
        <p
          ref={descriptionRef}
         className={classes.hiddenDescr}
        >{description}</p>
    </div>
  );
};
