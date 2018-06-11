// import React from 'react';

// const Footer = props => {
//   return (
//     <footer>
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//         <div class="collapse navbar-collapse" id="navbarNav">
//           <h5>@2018 Copyright</h5>
//         </div>
//       </nav>
//     </footer>
//   );
// };
// export default Footer;

import React from 'react';
const Footer = props => {
  return <div className="">
    <h4 className="footer">@ 2018Copyright {props.name}</h4>
    </div>;
};

export default Footer;
