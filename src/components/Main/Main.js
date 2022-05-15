import './Main.css';
import Hero from '../Hero/Hero';
import Card from '../Card/Card';
import Button from '../Button/Button';

export default function Main(props) {
    function setColor(backgroundColor, textColor) {
        document.documentElement.style.setProperty('--background-color', backgroundColor);
        document.documentElement.style.setProperty('--text-color', textColor);
    }
    setColor("#49DCFF", "white")

    return (
        <div className="container">
            <Hero />
            <div className="cards-container">
                {props.cardContent.map((card, index) => {
                    return <Card activePageHandler={props.activePageHandler} key={index} card={card} />
                })}
                <Button activePageHandler={props.activePageHandler} destination="add" buttonText="Add location" />
            </div>
        </div>
    );
}
