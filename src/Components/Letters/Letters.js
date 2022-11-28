import { Items, Button } from "./Letters.styles";

function renderButton(props) {
    return props.letters.map(letter => !letter.disabled ?
        <Button key={letter.letter} onClick={() => { props.guessLetter(letter.letter) }} data-test="letter">{letter.letter}</Button> :
        <Button key={letter.letter} data-test="letter" disabled>{letter.letter}</Button>)
}

const Letters = (props) => (
    <Items>
        {renderButton(props)}
    </Items>
);

export default Letters;