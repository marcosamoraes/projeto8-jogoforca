import { Items, Button, ButtonDisabled } from "./Letters.styles";

const Letters = (props) => (
    <Items>
        {props.letters.map(letter => !letter.disabled ?
            <Button key={letter.letter} onClick={() => { props.guessLetter(letter.letter) }} data-test="letter">{letter.letter}</Button> :
            <ButtonDisabled key={letter.letter} data-test="letter" disabled>{letter.letter}</ButtonDisabled>) }
    </Items>
);

export default Letters;