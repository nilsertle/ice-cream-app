import '../../fonts/Barlow-ExtraBold.ttf'
import './DetailPage.css';
import BackIcon from '../BackIcon/BackIcon';


export default function DetailPage(props) {
    function setColor(backgroundColor, textColor) {
        document.documentElement.style.setProperty('--background-color', backgroundColor);
        document.documentElement.style.setProperty('--text-color', textColor);
    }
    setColor("white", "#D463F0")

    return (
        <div className="outside-container">
            <BackIcon activePageHandler={props.activePageHandler} />
            <div className='container2'>
                <h2 className="name">{props.cardContent.name}</h2>
                <h4 className="location">{props.cardContent.location}</h4>
            </div>

            {props.cardContent.flavours.split(",").map((flavour) => {
                return <li key={flavour} className="location">{flavour}</li>
            })}


        </div>
    );
}