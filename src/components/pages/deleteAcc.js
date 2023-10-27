import React from "react";

import "./terms-policy.css";
import Footer from "../footer/Footer";

function DeleteAcc() {
  return (
    <div className="policy">
      <main>
        <h1>Instructions for account deletion</h1>
        <p>
          You can permanently delete your account through one of the following
          ways:
        </p>
        <ol>
          <li>
            Choose “Delete Account” on the “Settings” page in the application.
          </li>
          <li>
            Email us at{" "}
            <a href="mailto:admin@veraspeechapp.hk">admin@veraspeechapp.hk</a>;
            include in the email content of your request for account deletion
            and provide the email address you used in registering the account
            for the application.
          </li>
        </ol>
        <p>Note:</p>
        <ul>
          <li>
            After your account has been deleted, you won't be able to reactivate
            or access your previous account information.
          </li>
          <li>
            We may retain the personal information (including but not limited to
            the name, contact details, general information about the users) that
            was provided when creating the account.
          </li>
        </ul>
        <p>你可從以下其中一個方法刪除帳號:</p>
        <ol>
          <li>於應用程式中的「設定」選擇「刪除帳號」。</li>
          <li>
            傳送電郵到
            <a href="mailto:admin@veraspeechapp.hk">admin@veraspeechapp.hk</a>,
            並在電子郵件中註明您要求刪除帳號，及提供您於應用程式註冊帳號時所使用的電郵地址。
          </li>
        </ol>
        <p>注意：</p>
        <ul>
          <li>刪除帳戶後，您將無法重新啟動或存取帳戶內的資訊。</li>
          <li>
            我們可能會保留您在建立帳戶時提供的個人資訊（包括但不限於姓名、聯絡方式、使用者的基本資訊）。
          </li>
        </ul>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default DeleteAcc;
