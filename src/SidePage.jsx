import React from "react";
function SidePage(){
  function side(){
    return(
      <p>
        Encryption is the process by which a readable message is converted to an unreadable form to prevent
         unauthorized parties from reading it. Decryption is the process of converting an encrypted message
          back to its original (readable) format. The original message is called the plaintext message. The 
          encrypted message is called the ciphertext message.
      </p>
    );
  }
    return(
      <div>  
       <button onClick={side}>Overview</button>



      </div>
    );
}
export default SidePage;