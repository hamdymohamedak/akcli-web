import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Docs from "./Docs";
import { Route, RoseRouter } from "./LaRose";
export default function App() {
  // let customStyle = `
  //                 .route {
  //                   opacity: 0;
  //                   transform: translateY(10px);
  //                   transition: opacity 0.5s ease, transform 0.5s ease;
  //               }
  //               .route-active {
  //                   opacity: 1;
  //                   transform: translateY(0);
  //               }
  // `;
  return (
    <BrowserRouter>
      <RoseRouter>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
      </RoseRouter>
    </BrowserRouter>
  );
}
