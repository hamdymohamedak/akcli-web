import React from "react";
import "./App.css";
import app_file from "./akcli.exe";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="container">
      <div
        className="repo"
        onClick={() => {
          window.open("https://github.com/hamdymohamedak/akcli");
        }}
      >
        visit the Github repository
      </div>
      <h1>Welcome, Developers!</h1>
      <h2>AKCLI - Your Fast Command Line Tool</h2>
      <h3>Easily save and retrieve commands with AKCLI</h3>
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <button className="btn"><Link to={"/docs"} style={{color:"black"}}>Get AKCLI</Link></button>
        <a href={app_file} download="akCLI.exe" id="btn" className="btn">
          Download
        </a>
      </div>
    </div>
  );
}
