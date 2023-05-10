import React, { useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import QRCodeSVG from "qrcode.react";

import cls from "./QRCode";

const QRCodeExample = () => {
  const data = "https://kot-money-com.vercel.app/";

const ref = useRef(null);

  const handlePrint = useCallback(() => {
    console.log(ref.current)
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        console.log(dataUrl)
        const link = document.createElement("a");
        console.log(link);
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <div>
      <div ref={ref} id="qrcode" className={cls.qrcode}>
        <QRCodeSVG
          value={data}
          size={300}
          level={"H"}
          renderAs={"svg"}
          imageSettings={{
            height: 24,
            width: 24,
            excavate: true,
          }}
          fgColor={"#000"}
          bgColor={"#fff"}
          className={cls.qrcodeSvg}
        />
      </div>
      <button onClick={handlePrint}>Print QR Code</button>
    </div>
  );
};

export default QRCodeExample;

