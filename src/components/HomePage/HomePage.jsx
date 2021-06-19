import React from "react";
import { Aside } from "./Aside/Aside";
import { Main } from "./Main/Main";
import { Slider } from "./Slider/Slider";

export const HomePage = () => {
  return (
    <div className="page page--home">
      <Aside />
      <Main />
      <Slider />
    </div>
  );
};