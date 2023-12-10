import '../css/ReadMore.css';
import Modal from './Modal';
import Button from './Button';
import { useState } from 'react';

function ReadMore({readMore, readMoreFunction}){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleButtonClick = (event) => {
        event.preventDefault();
        setIsDialogOpen(true); // Open the dialog
    };

    const closeDialog = () => {
        setIsDialogOpen(false); // Close the dialog
    };

    return(
        <>
            <h2 className='main__title'>Know more about Cats...</h2>
            <p className='main__paragraph'>
                Cats are masters of their environment, finding joy in the simplest of things. 
                A cardboard box becomes a fortress, a sunbeam a cozy retreat. 
                They teach us to find wonder in our daily lives.
            </p>

            <p className='main__paragraph'>
                As companions, cats offer a unique blend of companionship and autonomy. 
                They remind us to cherish solitude as much as togetherness. 
                In their silent presence, we find comfort and a gentle reminder of life's simple pleasures.
            </p>

            <p className='main__paragraph'>
                In the world of felines, each breed presents its own charm. 
                From the majestic Maine Coon to the sleek Siamese, they offer a diverse tapestry of personalities. 
                Their eyes, windows to their souls, sparkle with wisdom and playful mischief. 
            </p>

            <p className='main__paragraph'>
                Cats, with their graceful movements and mysterious allure, captivate many. 
                They move with a silent elegance, embodying both independence and affection.
                Each purr and whisker twitch tells a story of contentment and curiosity.
            </p>

            <div className='button__div'>
                <Button className="button__link" type="button" visual="link" onClick={() => setIsModalOpen(true)}>Click here</Button>
                <Button className="button__button" type="button" visual="button" onClick={handleButtonClick}>Surpirse</Button>

                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <form className="modal__form" onSubmit={handleButtonClick}>
                    <Button className="model_button" type="submit" visual="link">Submit</Button>
                    </form>
                </Modal>
            </div>

            {isDialogOpen && (
                <div className="custom__dialog">
                    <p>Cats are very cute!!!</p>
                    <Button type="button" onClick={closeDialog}>Close</Button>
                </div>
            )}

        </>
    );
}

export default ReadMore;