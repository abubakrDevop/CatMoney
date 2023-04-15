import React, { useEffect, useState, useRef } from "react";
import styles from "./AnimItem.module.scss";

const AnimItem = ({ children, className, noHide = false }) => {
  const [isActive, setIsActive] = useState(false);

  const animItemRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const animItemHeight = animItemRef.current.offsetHeight;
      const animItemOffset = animItemRef.current.offsetTop;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        window.scrollY > animItemOffset - animItemPoint &&
        window.scrollY < animItemOffset + animItemHeight
      ) {
        setIsActive(true);
      } else {
        if (!noHide) {
          setIsActive(false);
        }
      }
    };


    const animItem = animItemRef.current;

    if (animItem) {
      onScroll();
      window.addEventListener("scroll", onScroll);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [noHide]);

  return (
    <div
      ref={animItemRef}
      className={`${styles._anim_items} ${className} ${isActive && styles._active}`}
    >
      {children}
    </div>
  );
};

export default AnimItem;