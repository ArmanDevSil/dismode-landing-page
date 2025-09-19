interface ButtonProps {
  text: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  className?: string;
}

const Button = ({ text, type = 'button', className = '' }: ButtonProps) => {
  return (
    <>
      <button type={type} className={className}>
        {text}
      </button>
    </>
  );
};

export default Button;
