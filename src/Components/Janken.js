import PcHand from "/PcHand";
import Results from "/Results";
import React, { useRef, useState } from 'react';
import '../janken.css';

const Janken = () => {

    const [showPcHand, setShowPcHand] = useState(false);
    const [clickedButton, setClickedButton] = useState(null);
    const [randomNumber, setRandomNumber] = useState(null);
    const targetRef = useRef(null);



    const handleClick = (buttonId) => {
        const generatedNumber = Math.floor(Math.random() * 3);
        setRandomNumber(generatedNumber);
        setShowPcHand(true);
        setClickedButton(buttonId);
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
    };


const scrollToTop = () =>{
 // Scroll to the top of the page
 window.scrollTo({
    top: 0,
    behavior: "smooth",
});
}


const clearHand = () => {
    setClickedButton("");
};


const clickAgain = () => {
    scrollToTop();
    clearHand();
}



    return (
        <div className="Select">
            <div className="User">

                <div className="Gu"
                    style={{ backgroundColor: clickedButton === 0 ? 'blue' : 'white', padding: '20px' }}
                    onClick={() => handleClick(0)}
                >
                    <h1>✊</h1>

                </div>

                <div className="Cho"
                    style={{ backgroundColor: clickedButton === 1 ? 'blue' : 'white', padding: '20px' }}
                    onClick={() => handleClick(1)

                    }>
                    <h1>✌️</h1>

                </div>

                <div className="Par"
                    style={{ backgroundColor: clickedButton === 2 ? 'blue' : 'white', padding: '20px' }}
                    onClick={() => handleClick(2)}
                >
                    <h1>✋</h1>

                </div>
            </div>

            <div className="pc" >
                <p>PCの出した手は...</p>
                {randomNumber !== null && (
                    <>
                        <PcHand number={randomNumber} />
                    </>
                )}

            </div>

            <div className="Result">
                <p>結果は...</p>

                {randomNumber !== null && (
                    <>
                        <Results buttonId={clickedButton} randomNumber={randomNumber} />
                    </>
                )}
            </div>
            <button className="again" onClick={clickAgain}>もう1回</button>

            <div ref={targetRef}></div>
        </div>

    );


};
export default Janken;
