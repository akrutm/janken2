const Results = ({ buttonId, randomNumber }) => {
const getResult = (buttonId, randomNumber) => {
    if (buttonId === randomNumber){
        return "あいこ"
    }else if(
        (buttonId === 0 && randomNumber === 1) ||
        (buttonId === 1 && randomNumber === 2) ||
        (buttonId === 2 && randomNumber === 0)
    ){
return "あなたの勝ち"
    }else {
        return "PCの勝ち";
      }
    };

    const result = getResult(buttonId, randomNumber);

  return (
    <div>
      <h2> {result}</h2>
    </div>
  );
} 


    export default Results;