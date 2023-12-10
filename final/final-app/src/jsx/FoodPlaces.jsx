import restaurants from "../js/restaurants";
import "../css/FoodPlaces.css";

function FoodPlaces({darkMode, setLink}) {
    const detail = restaurants.map(
        (restaurant) => {
            return (
                <div className="restaurant__card" key={restaurant.title}>
                    <img src={restaurant.img} className="restaurant__img" alt={restaurant.alt}></img>
                    <div>
                        <h4 className="restaurant__title">{restaurant.title}</h4>
                        <p className="restaurant__para">
                            {restaurant.para}
                        </p>
                    </div>
                </div>
            );
        }
    );
    return (
        <>
            <h2 className="food__places__title">Famous Food Places Of New York</h2>
            <p className="food__places__para">Food places in New York City offer an unparalleled culinary adventure, with a diverse range of cuisines, from world-renowned fine dining establishments to humble street vendors. Whether you're craving iconic New York-style pizza, exotic international flavors, or innovative fusion cuisine, the city's food scene has something to satisfy every palate and budget. Few of the Famous Places are below .</p>
            {detail}
        </>
    )
}

export default FoodPlaces;