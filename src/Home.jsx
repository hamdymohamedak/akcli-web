import React, { useEffect, useState } from "react";
import "./App.css";
import app_file from "./akcli.exe"; // Ensure this path is correct
import { Link } from "react-router-dom";
import { WaveText, SplitText, RoseBox, useRouter } from "./LaRose";

export default function Home() {
  const [Tag, setTag] = useState(() => WaveText);
  const [TagDescription, setTagDescription] = useState(() => SplitText);
  let { navigate } = useRouter()
  useEffect(() => {
    if (window.innerWidth <= 682) {
      setTag(() => "h1");
      setTagDescription(() => "h2");
    }
  }, []);

  return (
    <div className="container">
      <div
        className="repo"
        onClick={() => {
          window.open("https://github.com/hamdymohamedak/akcli");
        }}
      >
        Visit the Github repository
      </div>
      {React.createElement(Tag, null, "Welcome, Developers!")}
      {React.createElement(TagDescription, { RoseName: "commandLine" }, "AKCLI - Your Fast Command Line Tool")}
      {React.createElement(TagDescription, { RoseName: "AKCLI" }, "Easily save and retrieve commands with AKCLI")}
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <RoseBox autoLayout AutoHandling onClick={() => {
          navigate("/docs")
        }} className="btn">Get AKCLI</RoseBox>
        <a href={app_file} download="akCLI.exe" id="btn" className="btn">
          Download
        </a>
      </div>
    </div>
  );
}
