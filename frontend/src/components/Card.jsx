import axios from "axios";
import { NavLink } from "react-router-dom";

const Card = ({ atlante }) => {
  // suppression de la carte
  const deleteCard = () => {
    axios
      .delete(`http://localhost:3000/api/atlantes/${atlante._id}`)
      .then((res) => {
        refreshPage();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // rafrachissement de la page
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="box">
      <div className="card">
      <p>{atlante.name}</p>
      <p>Strengh: {atlante.skills.strengh}</p>
      <p>Speed: {atlante.skills.speed}</p>
      <p>Stamina: {atlante.skills.stamina}</p>
      <p>Agility: {atlante.skills.agility}</p>
      <p>Fighting: {atlante.skills.fighting}</p>
      <p>Intelligence: {atlante.skills.intelligence}</p>
      <p>Accessory: {atlante.accessory}</p>
      <button onClick={deleteCard}>X</button>
      </div>
    </div>
  );
};

export default Card;
