import React, { useEffect, useRef } from "react";
import QRCodeSVG from "qrcode.react";

import cls from "./QRCode";

const QRCodeExample = () => {

  const data = "https://kot-money-com.vercel.app/";

  return (
    <div className={cls.qrcode}>
      <QRCodeSVG
        value={data}
        size={300}
        level={"H"}
        renderAs={"svg"}
        imageSettings={{
          // src: "https://example.com/image.png",
          height: 24,
          width: 24,
          excavate: true,
        }}
        fgColor={"#000"}
        bgColor={"#fff"}
        className={cls.qrcodeSvg}
      />
    </div>
  );
};

export default QRCodeExample;
