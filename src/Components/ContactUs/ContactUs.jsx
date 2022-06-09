import "./contactUs.css";

const ContactUs = () => {
  return (
    <div className="contactUsContainer">
      <div className="contactUsMain">
        <h1>Save time, save money!</h1>
        <p>Sign up and we'll send the best deals to you</p>
        <div className="contactUsInputs">
          <input
            placeholder="Your Email"
            type="text"
            className="contactUsTextInput"
          />
          <button className="contactUsBtn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
