import React from "react";
import AppStore from "../../images/app-store.svg";
import PlayStore from "../../images/google-play.svg";
function AppDownload({ bgc, title, para, img }) {
  return (
    <div className="appInstall " style={bgc} id="appInstall">
      <div className="appInstall__typography">
        <h1 className="appInstall__title">{title}</h1>
        <p className="appInstall__para">{para}</p>
        <div className="appInstall__btnContainer">
          <a href="" className="appInstall__btn appInstall__btn--1">
            <img src={AppStore} alt="" className="appInstall__icon" />
            <span>
              <p className="appIntsall__p-top">Download on the</p>
              <p className="appIntsall__p-bottom">App Store</p>
            </span>
          </a>
          <a href="" className="appInstall__btn appInstall__btn--2">
            <img src={PlayStore} alt="" className="appInstall__icon" />
            <span>
              <p className="appIntsall__p-top">GET IT ON</p>
              <p className="appIntsall__p-bottom">Google Play</p>
            </span>
          </a>
        </div>
      </div>
      <div className="appInstall__imgContainer">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default AppDownload;
