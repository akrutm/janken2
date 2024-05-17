
import Janken from "Components/Janken";

const TopPage = () => {

    return (

        <>
            <div className="Header">
                <header className="App-header">
                    <iframe src="https://giphy.com/embed/lArbpi49T4VFIKClXE" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/games-play-hands-lArbpi49T4VFIKClXE"></a></p>
                    <h1>
                        じゃんけん....
                    </h1>

                    <p>
                        出すものを選んでね
                    </p>

                </header>

            </div>

            <div className="Janken">

                <Janken />

            </div>



        </>


    );


};
export default TopPage;
