import styles from "./Options.module.css";

const Options = ({ setFeedback }) => {
   const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
       [feedbackType]: prev[feedbackType] + 1,
     }));
   };

   return (
     <div className={styles.option}>
       <button className={styles.button} onClick={() => updateFeedback("good")}>
         Good
       </button>
       <button
         className={styles.button}
         onClick={() => updateFeedback("neutral")}
       >
         Neutral
       </button>
       <button className={styles.button} onClick={() => updateFeedback("bad")}>
         Bad
       </button>
     </div>
   );
 };

 export default Options;

