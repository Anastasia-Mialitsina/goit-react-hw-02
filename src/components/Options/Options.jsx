import Styles from "./Options.module.css";

const Options = ({ feedback, setFeedback }) => {
   const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
       [feedbackType]: prev[feedbackType] + 1,
     }));
   };

   return (
     <div>
       <button onClick={() => updateFeedback("good")}>Good</button>
       <button onClick={() => updateFeedback("neutral")}>Neutral</button>
       <button onClick={() => updateFeedback("bad")}>Bad</button>
     </div>
   );
 };

 export default Options;

