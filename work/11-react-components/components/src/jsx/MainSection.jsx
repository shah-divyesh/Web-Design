import RareCats from "./RareCats";
import CardCollection from "./CardCollection";
import ReadMore from "./ReadMore";


function MainSection({link, setLink}) {
    return(
        <main className="main">
            {
                (link === "Home") ? <CardCollection setLink={setLink}/>
                    : 
                    (link === "About Cats") ? <ReadMore/> : <RareCats/>
            }
        </main>
    );
}

export default MainSection;