import visitNewYork from "../js/visitNewYork";
import '../css/TransportationNewYork.css'

function TransportationNewYork({darkMode, setLink}) {
    const detail = visitNewYork.map(
        (mode) => {
            return (
                <div className="mode" key={mode.title}>
                    <h3 className="mode__title">{mode.title}</h3>
                    <p>{mode.para}</p>
                </div>
            );
        }
    );
    return (
        <>
            <h2 className="transport__title"> Transportation Guide for New York</h2>
            {detail}
        </>
    )
}

export default TransportationNewYork;