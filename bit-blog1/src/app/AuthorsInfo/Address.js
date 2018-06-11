import React from 'react';
const Address = props => {
  return (
    <div className="row">
      {/* <div className="col-12"> */}
      <div className="Address">
        <h3>Address</h3>
        <p> {`street: ${props.street}`}</p>
        <p> {`city: ${props.city}`}</p>
        <p> {`zipcode: ${props.zipcode}`}</p>
      </div>
      <div className="iframe">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895357751!2d-74.26054990449946!3d40.697668408267845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2srs!4v1528710406426"
          width="450"
          height="350"
          frameborder="2"
          allowfullscreen
        />
      </div>
    </div>
  );

  // </div>
};
export default Address;
