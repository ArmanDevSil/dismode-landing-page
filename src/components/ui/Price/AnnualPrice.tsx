import Button from '../Button/Button';

const AnnualPrice = () => {
  return (
    <>
      <div>
        <span>Annual</span>
        <h3>
          $9.99 <span>per month</span>
        </h3>
        <span>$119.99 per year</span>
        <p>
          Get <strong>all benefits</strong> in DisMode with the Complete Plan
        </p>
        <Button text="Subscribe" className={`btn btn--sub btn--best`} />
      </div>
    </>
  );
};

export default AnnualPrice;
