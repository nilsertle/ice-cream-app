import '../../fonts/Barlow-ExtraBold.ttf'
import './Button.css';

export default function Button(props) {
    function handleOnClick() {
        props.activePageHandler({ page: props.destination });
        if (props.cardContentHandler && props.data) {
            props.cardContentHandler(oldArray => [...oldArray, props.data]);
        }
    }

    return (
        <button onClick={handleOnClick} className="button-container">
            <h2 className="button-text">{props.buttonText}</h2>
        </button>
    );
}