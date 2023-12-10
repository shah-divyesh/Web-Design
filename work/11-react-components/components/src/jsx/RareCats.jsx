import '../css/RareCats.css';
import sokeke from '../assets/angry__cat.png';
import minskin from '../assets/baby__cat.png';

function RareCats(params){
    return(
        <>
        <div className='rare__cards'>
            <div className="rare__card">
                <img className="rare__card__sokoke" src={sokeke} alt="Sokeke cats"/>
                <div className="rare__card__text">
                    <h2 className="rare__card__title">Sokoke cats</h2>
                    <p className="rare__card__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto deleniti accusamus minima reiciendis quas recusandae ut ad labore vero quis inventore quam corrupti blanditiis porro odit consectetur, harum temporibus eveniet?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed consequuntur quis neque deleniti quam? Perferendis obcaecati eius consequatur exercitationem architecto quasi amet fuga, voluptatum in reprehenderit delectus explicabo minus accusamus.</p>
                </div>     
            </div>
            <div className="rare__card">
                <img className="rare__card__minskin" src={minskin} alt="Minskin cats"/>
                <div className="rare__card__text">
                    <h2 className="rare__card__title">Minskin cats</h2>
                    <p className="rare__card__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto deleniti accusamus minima reiciendis quas recusandae ut ad labore vero quis inventore quam corrupti blanditiis porro odit consectetur, harum temporibus eveniet?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed consequuntur quis neque deleniti quam? Perferendis obcaecati eius consequatur exercitationem architecto quasi amet fuga, voluptatum in reprehenderit delectus explicabo minus accusamus.</p>
                </div>   
            </div>
        </div>
        </>
    );
}

export default RareCats;