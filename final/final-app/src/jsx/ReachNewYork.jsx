import reachNewYork from "../js/reachNewYork";
import "../css/ReachNewYork.css";

function ReachNewYork({setLink}) {
    const detail = reachNewYork.map(
        (item) => {
            return (
                <div className="reach__card" key={item.title}>
                    <img src={item.img} className="reach__card__img" alt={item.alt}></img>
                    <div>
                        <h4 className="reach__card__title">{item.title}</h4>
                        <p className="reach__card__para">
                            {item.para}
                        </p>
                    </div> 
                </div>
            );
        }
    );
    return (
        <>
            <h2 className="reach__title">Ways to Reach New York</h2>
            {detail}
        </>
    )
}

export default ReachNewYork;