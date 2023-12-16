import attraction from '../js/attractions';
import '../css/TouristPlaces.css'

function TouristPlaces({darkMode, setLink}) {
    const detail = attraction.map(
        (place) => {
            return (
                <div className="place__card" key={place.title}>
                    <img src={place.img} className="place__img" alt={place.alt}></img>
                    <div>
                        <h4 className="place__title">{place.title}</h4>
                        <p className="place__para">
                            {place.para}
                        </p>
                    </div>
                </div>
            );
        }
    );
    return (
        <>
            <h2 className="attractions__title"> Tourist Places of New York</h2>
            {detail}
        </>
    )
}

export default TouristPlaces;