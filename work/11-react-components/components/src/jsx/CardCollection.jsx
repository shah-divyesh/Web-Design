import angryCat from '../assets/angry__cat.png';
import '../css/CardCollection.css';
import PageCard from './PageCard';
import catsInfo from '../js/CatsInfo';


function CardCollection({setLink}){
    const cardContents = catsInfo.map(
        (cardContent) => {
            return(
                <PageCard src={cardContent.address}
                        alt={cardContent.alt}
                        name={cardContent.name} 
                        para={cardContent.para} 
                        key={cardContent.name}/>
            );
        }
    );

    const readMore = 
        <a
            className="card__button"
            type="button"
            href="/"
            onClick={
                (e) => {
                    setLink('About Cats');
                    e.preventDefault();
                }
            }
        >
            ReadMore!!
        </a>
    ;

    return(
        <>
            {
                <div className="cardPage">
                    <div className="card">
                        <img className="card__img" src={angryCat} alt="It's a very Angry Cat"/>
                        <h2 className="card__title">Angry cat</h2>
                        <p className="card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ea, commodi amet sunt ad, laborum facilis debitis nam deleniti magnam minus? {readMore} Porro vitae labore quasi incidunt, saepe eos non vel.</p>
                    </div>
                    {cardContents}
                </div>
            }
        </>
    );

}

export default CardCollection;