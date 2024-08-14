import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const AdvancedAnimatedComponent = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(boxRef.current, { x: 100, duration: 1 })
      .to(boxRef.current, { y: 100, duration: 1 })
      .to(boxRef.current, { x: 0, duration: 1 })
      .to(boxRef.current, { y: 0, duration: 1 });
  }, []);

  return (
    <div>
      <div ref={boxRef} style={styles.box}>
        Animate me!
      </div>
    </div>
  );
};

const styles = {
  box: {
    width: "100px",
    height: "100px",
    backgroundColor: "blue",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
};

export default AdvancedAnimatedComponent;
