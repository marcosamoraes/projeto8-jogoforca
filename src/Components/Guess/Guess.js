import { Button, Div, Input, KnowWord } from "./Guess.styles";

const Guess = (props) => (
    <Div>
        <KnowWord>Já sei a palavra!</KnowWord>
        <Input value={props.guessInput} onChange={(inputValue) => { props.setGuessInput(inputValue.target.value.replaceAll(" ", "")) } } data-test="guess-input" disabled={props.isDisabled}></Input>
        <Button onClick={() => { props.guess() }} data-test="guess-button" disabled={props.isDisabled}>Chutar!</Button>
    </Div>
);

export default Guess;