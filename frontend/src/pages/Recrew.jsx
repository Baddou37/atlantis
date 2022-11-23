import { useState, useEffect } from "react";
import Form from "../components/Form";
import Card from "../components/Card";
import axios from "axios";

const Recrew = () => {

  const [atlantes, setAtlantes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/atlantes")
      .then((res) => {
        setAtlantes(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="recrew_display">
      <div className="enrollment">
        <h2>Enrôlement</h2>
        <Form />
      </div>
      <div className="recrew">
          <h2>Atlantes dans le bateau</h2>
        <div className="crew">
            {atlantes.map((atlante, index) => (
              <Card atlante={atlante} key={atlante._id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Recrew;
