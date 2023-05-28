import React from "react";

const InfoTooltip = (props) => {
  // console.log("InfoTooltip");
  return (
    <section className={`popup ${true ? "popup_opened" : null}`}>
      <div className="popup__container">
        <img className="popup__auth-img" src={props.img} alt={`иконка ${props.children}`} />
        <p className="popup__auth-message">{props.children}</p>
        <button className="popup__close-btn" type="button" onClick={() => {}} />
      </div>
    </section>
  );
};

export default InfoTooltip;
