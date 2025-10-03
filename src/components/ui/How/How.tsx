import styles from './How.module.css';

interface HowProps {
  title: string;
  text: React.ReactNode;
}

const How = ({ title, text }: HowProps) => {
  return (
    <div className={`container ${styles.containerHow}`}>
      <div className={styles.howTextBox}>
        <h3>{title}</h3>
        <p className="textboxHow">{text}</p>
      </div>
      <img src="" alt="RoadMap example image" className="imgHow" />
    </div>
  );
};

export default How;
