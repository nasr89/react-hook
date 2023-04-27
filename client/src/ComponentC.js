// methode with context API
//-----------------------------------

// import React from "react";
// import { ChannelContext, UserContext } from "./App";
// const ComponentC = () => {
//   return (
//     <div>
//       <UserContext.Consumer>
//         {(user) => {
//           return (
//             <ChannelContext.Consumer>
//               {(channel) => {
//                 return (
//                   <h1>
//                     My name is {user} channel is {channel}
//                   </h1>
//                 );
//               }}
//             </ChannelContext.Consumer>
//           );
//         }}
//       </UserContext.Consumer>
//     </div>
//   );
// };

// export default ComponentC;

// -----------------------------------------------

// methode with useContext
//-----------------------------------

import React, { useContext } from "react";
import { ChannelContext, UserContext } from "./App";
const ComponentC = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      <h1>
        My name is {user} channel is {channel}
      </h1>
    </div>
  );
};

export default ComponentC;
