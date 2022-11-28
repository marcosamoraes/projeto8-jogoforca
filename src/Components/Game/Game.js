import { Div, Image, Items, LeftItem, RightItem, StartButton, Word } from "./Game.styles";

const Game = (props) => (
    <Items>
        <LeftItem>
            <Image src={props.hangmanImage} data-test="game-image"></Image>
        </LeftItem>
        <RightItem>
            <StartButton onClick={props.chooseWord} data-test="choose-word">Escolher Palavra</StartButton>
            <Div data-test="word" data-answer={props.wordProgress.map(letterProgress => letterProgress.letter).join("")}>
                {props.wordProgress.map(word => <Word key={"letter_index_" + Array.prototype.indexOf.call(props.wordProgress, word)} success={word.success}>{word.isDiscovered  ? word.letter : "_"}</Word>)}
            </Div>
        </RightItem>
    </Items>
);

export default Game;