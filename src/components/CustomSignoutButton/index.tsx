import React from "react";
import { Auth } from "aws-amplify";

function CustomSignoutButton() {
  const signOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    Auth.signOut().then(() => {
      window.location.reload();
    });
  };
  return <button onClick={signOut}>Sign out</button>;
}

export default CustomSignoutButton;
