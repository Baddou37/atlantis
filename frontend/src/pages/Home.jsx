import React from "react";
import BoatBroken from "../assets/images/atlantis.png";
import Soldier from "../assets/images/soldier.png";

const Home = () => {
    return (
        (document.title = "Atlantis - Accueil"),
        (
            <div className="home">
                <div className="display_text1">
                    <div className="text1">
                        <h1>Hey toi !</h1>
                        <p>
                            Bonjour, toi qui passe par là, nous avons besoin de
                            compétences pour nous aider à sauver Atlantis.
                            <br />
                            Je t'explique : Atlantis est une ville sous-marine,
                            et elle est en train de couler. Nous avons besoin de
                            toi pour sauver certains Atlantes.
                            <br />
                            Le bateau de secours est en route, mais il ne peut
                            pas accueillir tout le monde. Nous avons besoin de
                            toi pour sélectionner les Atlantes qui seront
                            sauvés.
                            <br />
                            Pour cela, tu va devoir recruter des Atlantes, et
                            les mettre à bord du bateau de secours, en
                            remplissant leur fiche de recrue.
                        </p>
                    </div>
                    <img src={BoatBroken} alt="" />
                </div>
                <div className="display_text2">
                  <img src={Soldier} alt="Soldat" />
                    <div className="text2">
                        <h2>Comment ça marche ?</h2>
                        <p>
                            Pour recruter un Atlante, tu vas devoir remplir sa
                            fiche de recrue. Pour cela, tu vas devoir cliquer
                            sur le bouton "Recruter".
                            <br />
                            Une fois que tu as cliqué sur le bouton "Recruter",
                            tu vas devoir remplir la fiche de recrue de
                            l'Atlante.
                            <br />
                            Une fois que tu as rempli la fiche de recrue, tu vas
                            devoir cliquer sur le bouton "Valider".
                            <br />
                            Une fois que tu as cliqué sur le bouton "Valider",
                            l'Atlante dera envoyé à bord du bateau de secours.
                            <br />
                            Tu pourras voir les Atlantes qui sont à bord du
                            bateau de secours directement sur la page de recrutement.
                        </p>
                    </div>
                </div>
            </div>
        )
    );
};

export default Home;
