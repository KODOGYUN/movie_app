import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        “Reactの勉強のために作成したサイトです。最初のReactでの開発ですが、すごく楽しかったです。”
      </span>
      <span>− 期間：20210415ー20210430</span>
    </div>
  );
}

export default About;