import '../../fonts/Barlow-ExtraBold.ttf'
import './AddLocationScreen.css';
import Button from '../Button/Button';
import { useEffect, useState } from "react";
import BackIcon from '../BackIcon/BackIcon';


function InputField(props) {
    return (
        <input
            className='input-field'
            type="text" name={props.name}
            placeholder={props.placeholder}
            onInput={(e) => props.handler(e.target.value)} />
    )
}



export default function AddLocationScreen(props) {
    function setColor(backgroundColor, textColor) {
        document.documentElement.style.setProperty('--background-color', backgroundColor);
        document.documentElement.style.setProperty('--text-color', textColor);
    }
    setColor("white", "#D463F0")

    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [obj, setObj] = useState({});

    useEffect(() => {
        setObj({ name: value1, location: value2, flavours: value3 })
    }, [value1, value2, value3])

    return (
        <div className="screen-container">

            <div className="form-container">
                <BackIcon activePageHandler={props.activePageHandler} />
                <InputField name="name" placeholder="Name" value={value1} handler={setValue1} />
                <InputField name="location" placeholder="Location" value={value2} handler={setValue2} />
                <InputField name="flavor" placeholder="Flavor (comma seperated)" value={value3} handler={setValue3} />
            </div>
            <Button activePageHandler={props.activePageHandler} className="button" destination="" buttonText="Save" cardContentHandler={props.cardContentHandler} data={obj} />
        </div>
    );
}
