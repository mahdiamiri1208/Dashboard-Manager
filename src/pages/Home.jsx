import React from "react";

export default function Home({ onLoginClick }) {
  return (
    <>
      <p>You must log in to view the information.</p>
      <button
        className="btn btn-primary mt-3"
        onClick={onLoginClick}
      >
        Login
      </button>
    </>
  );
}
