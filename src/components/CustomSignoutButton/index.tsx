import React from "react";
import { Auth } from "aws-amplify";

function CustomSignoutButton() {
  const signOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    Auth.signOut().then(() => {
      window.location.reload();
    });
  };
  return (
    <button
      type="button"
      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      onClick={signOut}
    >
      Sign out
    </button>
  );
}

export default CustomSignoutButton;
