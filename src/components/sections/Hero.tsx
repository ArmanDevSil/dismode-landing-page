import Button from '../ui/Button/Button';

const Hero = () => {
  return (
    <section className="section section--header">
      <div className="hero-text-box">
        <h1>Learn The Modern Way in DisMode</h1>
        <p>Discover how to really learn in the modern age</p>
        <Button className="btn btn--cta" text="Learn in DisMode" />
      </div>
    </section>
  );
};

export default Hero;
