import React from "react";

import "./terms-policy.css";
import Footer from "../footer/Footer";

function DeleteAcc() {
  return (
    <div className="policy">
      <main>
        <h1>Instructions for account deletion</h1>
        <p>
          Please email{" "}
          <a href="mailto:admin@veraspeechapp.hk">admin@veraspeechapp.hk</a> to
          request account deletion.
        </p>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default DeleteAcc;
