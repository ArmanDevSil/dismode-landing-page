import styles from './How.module.css';

interface HowProps {
  title: string;
  text: React.ReactNode;
  img: string;
}

const How = ({ title, text, img }: HowProps) => {
  return (
    <div className={styles.how}>
      {img && (
        <div className={`container ${styles.containerImg}`}>
          <img src={img} alt="RoadMap example image" className="imgHow" />
        </div>
      )}

      <div className={`${styles.howTextBox} flex flex-column flex-center`}>
        <h3 className={styles.howTextBoxTitle}>{title}</h3>
        <p className="textboxHow">{text}</p>
      </div>
    </div>
  );
};

export default How;
