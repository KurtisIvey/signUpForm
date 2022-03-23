import React from "react";
import Styling from "./Wallpaper.module.css";

function Wallpaper() {
  return (
    <div className={Styling.backgroundImage}>
      <div className={Styling.messageContainer}>
        <div className={Styling.messageTransparentBox}></div>
        <div className={Styling.message}>Enter the Fray</div>
      </div>
      <div className={Styling.creditContainer}>
        <div className={Styling.credit}>
          Art by{" "}
          <a
            className={Styling.creditLink}
            href="https://wallpapercave.com/u/sumy1456"
          >
            Animelover
          </a>
        </div>
      </div>
    </div>
  );
}

export default Wallpaper;
