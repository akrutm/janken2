const PcHand = ({ number }) => {
    const hands = ["✊", "✌️", "✋"];
    return(
        <div>
      <h1>{hands[number]}</h1>
    </div>
    )

};
export default PcHand;