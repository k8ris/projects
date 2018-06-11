import React from 'react';
const Company = props => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="Address">
          <h3>Slogan</h3>
          <p> {`name: ${props.name}`}</p>
          <p> {`catchPhrase: ${props.catchPhrase}`}</p>

        </div>

      </div>
    </div>
  );
};
export default Company;
