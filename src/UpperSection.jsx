import React from "react";
function UpperSection(){
    return(
        <div className="flex justify-between bg-blue-400">
      <img className="w-20 h-20 pt-2 pb-2 rounded-full" src="https://images.unsplash.com/photo-1577373644244-ff9935a13a2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80"></img>  
      <h1 className="text-3xl pt-2 pb-2">TEXT ENCRYPTION-DECRYPTION</h1>
      <div className="space-x-3 pt-2 pb-2 ">
      <a>HOME</a>
      <a>MORE ABOUT THIS</a>
      <a>CONTACT US</a>
      </div>
      </div>
    );
}
export default UpperSection;