import cruise from "/Users/divyesh/NEU/Web-Design/student-bosinfo6150--shah-divyesh/final/final-app/src/assets/cruise_ship.jpeg";
import Train from "../assets/newyork__subway.jpeg";
import plane from "../assets/newark__airport.jpeg";
// import logo from '../assets/logo__image.jpeg';



const reachNewYork = [
    {
        title: '1. By Air',
        para: "New York City is served by three major airports: John F. Kennedy International Airport (JFK), LaGuardia Airport (LGA), and Newark Liberty International Airport (EWR). These airports offer domestic and international flights.",
        img: plane,
        alt: 'By Air'
    },
    {
        title: '2. By Train',
        para: "Take Amtrak or regional commuter trains to reach Penn Station or Grand Central Terminal in Manhattan from various cities along the East Coast.",
        img: Train,
        alt: 'By train'
    },
    {
        title: '3. By Cruise Ship',
        para: "If you're arriving on a cruise, you may disembark at one of New York City's cruise terminals, such as the Manhattan Cruise Terminal or the Brooklyn Cruise Terminal",
        img: cruise,
        alt: 'By Ship'
    }
];

export default reachNewYork;