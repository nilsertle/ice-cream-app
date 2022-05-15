import "./BackIcon.css"

export default function BackIcon(props) {
    return (
        <button className="back-icon" onClick={() => props.activePageHandler("")} />
    )
}