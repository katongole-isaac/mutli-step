import ThankYouIcon from "../instruction/assets/images/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <>
      <div className="thank-you">
        <div className="tick">
          <img src={ThankYouIcon} alt="thank_you_icon" />
        </div>
        <div>
          <h1>Thank you!</h1>
        </div>
        <div className="text">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </div>
      </div>
    </>
  );
};

export default ThankYou;
