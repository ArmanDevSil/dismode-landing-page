import styles from './How.module.css';

interface HowProps {
  title: string;
  text: React.ReactNode;
  img: string;
}

const How = ({ title, text, img }: HowProps) => {
  return (
    <div className={`container ${styles.containerHow}`}>
      <div className={styles.howTextBox}>
        <h3>{title}</h3>
        <p className="textboxHow">{text}</p>
      </div>

      {img && (
        <div className={`container ${styles.containerImg}`}>
          <img src={img} alt="RoadMap example image" className="imgHow" />
        </div>
      )}
    </div>
  );
};

export default How;
