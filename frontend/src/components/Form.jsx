import { useState } from "react";
import axios from "axios";

const Form = () => {
  // Name
  const [inputName, setInputName] = useState("");
  const [isValidName, setIsValidName] = useState(null);
  const nameRegExp = new RegExp("(^[a-zA-Zéè -]{2,35}$)");
  const [nameIsEditing, setNameIsEditing] = useState(false);

  const checkNameValidity = (e) => {
    let inputValue = e.target.value;
    setInputName(inputValue);
    if (
      (inputValue.length < 3 || !nameRegExp.test(inputValue)) &&
      nameIsEditing
    ) {
      setIsValidName(false);
    } else {
      setIsValidName(true);
    }
  };

  // Skills (strengh, speed, stamina, agility, fighting, intelligence)
  const [inputStrengh, setInputStrengh] = useState(1);
  const [inputSpeed, setInputSpeed] = useState(1);
  const [inputStamina, setInputStamina] = useState(1);
  const [inputAgility, setInputAgility] = useState(1);
  const [inputFighting, setInputFighting] = useState(1);
  const [inputIntelligence, setInputIntelligence] = useState(1);

  const handleStrengh = (e) => {
    setInputStrengh(e.target.value);
  };
  const handleSpeed = (e) => {
    setInputSpeed(e.target.value);
  };
  const handleStamina = (e) => {
    setInputStamina(e.target.value);
  };
  const handleAgility = (e) => {
    setInputAgility(e.target.value);
  };
  const handleFighting = (e) => {
    setInputFighting(e.target.value);
  };
  const handleIntelligence = (e) => {
    setInputIntelligence(e.target.value);
  };

  // skill randomizer
  const randomizeSkills = () => {
    setInputStrengh(Math.floor(Math.random() * 10) + 1);
    setInputSpeed(Math.floor(Math.random() * 10) + 1);
    setInputStamina(Math.floor(Math.random() * 10) + 1);
    setInputAgility(Math.floor(Math.random() * 10) + 1);
    setInputFighting(Math.floor(Math.random() * 10) + 1);
    setInputIntelligence(Math.floor(Math.random() * 10) + 1);
  };

  // Accessory
  const options = [
    { value: "none", label: "Aucun" },
    { value: "sword", label: "Épée" },
    { value: "shield", label: "Bouclier" },
    { value: "bow", label: "Arc" },
    { value: "crossbow", label: "Arbalète" },
    { value: "staff", label: "Bâton" },
    { value: "dagger", label: "Dague" },
    { value: "axe", label: "Hache" },
    { value: "spear", label: "Lance" },
    { value: "mace", label: "Masse" },
    { value: "whip", label: "Fouet" },
    { value: "sling", label: "Fronde" },
    { value: "hammer", label: "Marteau" },
    { value: "sickle", label: "Faux" },
    { value: "net", label: "Filet" },
  ];

  const [inputAccessory, setInputAccessory] = useState(options[0].value);
  const [isValidAccessory, setIsValidAccessory] = useState(null);
  const [accessoryIsEditing, setAccessoryIsEditing] = useState(false);

  const handleAccessory = (e) => {
    setInputAccessory(e.target.value);
    if (e.target.value === "none" && accessoryIsEditing) {
      setIsValidAccessory(false);
    } else {
      setIsValidAccessory(true);
    }
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setNameIsEditing(true);
    setAccessoryIsEditing(true);
    if (isValidName && isValidAccessory) {
      const data = {
        name: inputName,
        skills: {
          strengh: inputStrengh,
          speed: inputSpeed,
          stamina: inputStamina,
          agility: inputAgility,
          fighting: inputFighting,
          intelligence: inputIntelligence,
        },
        accessory: inputAccessory,
      };
      axios
        .post("http://localhost:3000/api/atlantes", data)

        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("Formulaire invalide");
      if (!isValidName) {
        console.log("Nom invalide");
      }
      if (!isValidAccessory) {
        console.log("Accessoire invalide");
      }
    }
  };

  // refresh
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="enrollment_display">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label> <br />
          <input
            type="text"
            name="name"
            id="name"
            value={inputName}
            onChange={checkNameValidity}
            className={
              isValidName === false
                ? "form-control is-invalid"
                : isValidName === true
                ? "form-control is-valid"
                : "form-control"
            }
          />
          <div className="consigne">Veuillez choisir nom compris entre 2 et 20 caractères</div>
        </div>
        <div className="form-group">
          <label htmlFor="strengh">Force : {inputStrengh}</label> <br />
          <input
            type="range"
            name="strengh"
            id="strengh"
            min="1"
            max="10"
            value={inputStrengh}
            onChange={handleStrengh}
          />
        </div>
        <div className="form-group">
          <label htmlFor="speed">Vitesse : {inputSpeed}</label> <br />
          <input
            type="range"
            name="speed"
            id="speed"
            min="1"
            max="10"
            value={inputSpeed}
            onChange={handleSpeed}
          />
        </div>
        <div className="form-group">
          <label htmlFor="stamina">Endurance : {inputStamina}</label> <br />
          <input
            type="range"
            name="stamina"
            id="stamina"
            min="1"
            max="10"
            value={inputStamina}
            onChange={handleStamina}
          />
        </div>
        <div className="form-group">
          <label htmlFor="agility">Agilité : {inputAgility}</label> <br />
          <input
            type="range"
            name="agility"
            id="agility"
            min="1"
            max="10"
            value={inputAgility}
            onChange={handleAgility}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fighting">Combat : {inputFighting}</label> <br />
          <input
            type="range"
            name="fighting"
            id="fighting"
            min="1"
            max="10"
            value={inputFighting}
            onChange={handleFighting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="intelligence">
            Intelligence : {inputIntelligence}
          </label>{" "}
          <br />
          <input
            type="range"
            name="intelligence"
            id="intelligence"
            min="1"
            max="10"
            value={inputIntelligence}
            onChange={handleIntelligence}
          />
        </div>
        <div className="form-group">
        <button
          type="button"
          onClick={randomizeSkills} 
        >
          <span>Random</span>
        </button>
        </div>
        <div className="form-group">
          <label htmlFor="accessory">Accessoire</label> <br />
          <select
            name="accessory"
            id="accessory"
            value={inputAccessory}
            onChange={handleAccessory}
            className={
              isValidAccessory === false
                ? "form-control is-invalid"
                : isValidAccessory === true
                ? "form-control is-valid"
                : "form-control"
            }
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div 
          className="consigne"
          style={{display: inputAccessory === "none" ? "block" : "none"}}
          >
            Veuillez choisir un accessoire.</div>
        </div>
        <div className="form-group">
          <button
          onClick={refreshPage}
          type="submit">Enrôler</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
