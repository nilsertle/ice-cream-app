import '../../fonts/Barlow-ExtraBold.ttf'
import '../../fonts/Barlow-Regular.ttf'
import './Card.css';

export default function Card(props) {
    return (
        <div className="card-container" onClick={() => props.activePageHandler({ page: "detail", props: props.card })}>
            <h2 className="card-name">{props.card.name}</h2>
            <h4 className="card-location">{props.card.location}</h4>
        </div>
    );
}
