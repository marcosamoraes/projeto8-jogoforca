import { useState } from "react";

import Game from "../../Components/Game/Game";
import Guess from "../../Components/Guess/Guess";
import Letters from "../../Components/Letters/Letters";

import { GameDiv } from "./App.styles";
import Reset from "../../assets/Reset";

import palavras from "../../palavras";

const hangmanImages = [
    require("../../assets/images/forca0.png"),
    require("../../assets/images/forca1.png"),
    require("../../assets/images/forca2.png"),
    require("../../assets/images/forca3.png"),
    require("../../assets/images/forca4.png"),
    require("../../assets/images/forca5.png"),
    require("../../assets/images/forca6.png"),
];

const App = () => {
    return (
        <GameDiv>
            <Reset></Reset>
            <Game></Game>
            <Letters></Letters>
            <Guess></Guess>
        </GameDiv>
    );
};

export default App;