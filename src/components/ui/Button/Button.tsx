import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  className: string;
  id?: string;
}

const Button = ({ text, className, id }: ButtonProps) => {
  const classNames = className
    .split(' ')
    .map(c => styles[c])
    .join(' ');

  return (
    <button className={classNames} id={id}>
      {text}
    </button>
  );
};

export default Button;
