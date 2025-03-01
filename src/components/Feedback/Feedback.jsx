import styles from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <div className={styles.feedback}>
      <p className={styles.phf}>Good: {good}</p>
      <p className={styles.phf}>Neutral: {neutral}</p>
      <p className={styles.phf}>Bad: {bad}</p>
      <p className={styles.phf}>Total: {total}</p>
      <p className={styles.phf}>Positive: {positive}%</p>{" "}
      {/* Добавили строку */}
    </div>
  );
};

export default Feedback;
