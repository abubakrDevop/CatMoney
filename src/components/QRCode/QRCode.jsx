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
// import React, { useRef, forwardRef, useEffect } from "react";
// import { QRCodeSVG } from "qrcode.react";

// const ForwardedQRCodeSVG = forwardRef((props, ref) => {
//   return <QRCodeSVG ref={ref} {...props} />;
// });

// const QRCodeExample = () => {
//   const qrCodeRef = useRef(null);

//   const saveQRCode = () => {
//     const dataURL = qrCodeRef.current.toDataURL();

//     // Создаем ссылку для скачивания файла
//     const link = document.createElement("a");
//     link.href = dataURL;
//     link.download = "qrcode.png"; // Указываем имя файла
//     link.click();
//   };

//   useEffect(() => {
//     // Задержка перед вызовом saveQRCode()
//     const timeoutId = setTimeout(() => {
//       if (qrCodeRef.current) {
//         saveQRCode();
//       }
//     }, 1000); // Задержка в миллисекундах

//     return () => clearTimeout(timeoutId); // Очистка таймера при размонтировании компонента
//   }, []);

//   return (
//     <>
//       <ForwardedQRCodeSVG
//         ref={qrCodeRef}
//         value="https://kot-money-com.vercel.app/"
//       />
//       <button onClick={saveQRCode}>Сохранить QR-код</button>
//     </>
//   );
// };

// export default QRCodeExample;
