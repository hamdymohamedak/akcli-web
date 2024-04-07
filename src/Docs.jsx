import React from "react";
import "./docs.css";
import first_img from "./first.png";
import socound_img from "./secound.png";
import done_img from "./done.png";
export default function Docs() {
  return (
    <div className="container">
      <div className="parent">
        <img className="docs_img" src={first_img} />
        <p className="dis_txt">
          After downloading Command Line exe and opening the file, this window
          should appear. You must choose the type of command prompt you want.
          for powershell press [2] for CMD press [1]
        </p>
      </div>
      <hr />
      <div className="parent">
        <img className="docs_img" src={socound_img} />
        <p className="dis_txt">
          You have chosen the type of command viewer you want. Now create a text
          file and choose the name you want for it. It is preferable that it be
          an expressive name such as commandLine. Then take the path to the file
          and put it in AKCLI. If you do not know how you can get the file path,
          simply right-click on the file and then choose the file path from the
          list.
        </p>
      </div>
      <div className="parent">
        <img className="docs_img" src={done_img} />
        <p className="dis_txt">
          If the command line appears like this, then you are now ready to
          start. All the commands that you will write will be saved in the text
          file that we created in the previous part.
        </p>
      </div>
    </div>
  );
}
