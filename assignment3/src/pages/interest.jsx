import React from "react";
import { Card } from "../component/card";
import { cardImg } from "../datas/image";

export const Interest = () => {
  return (
    <div class="content4 isi">
      {cardImg.map((ima) => (
        <Card detail={ima.detail} url={ima.url} />
      ))}
    </div>
  );
};
