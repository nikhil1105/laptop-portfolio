import { Center, Html, useProgress } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Load = () => {

  const { progress } = useProgress();
  const loader = useRef({
    isLoaded:false,
    value:0
  })  

  useEffect(()=>{
    if (progress != 100 && !loader.current.isLoaded ) loader.current.value = progress
    else {
      loader.current.isLoaded = true
      loader.current.value = 90 + Math.random() * 10
    }
  },[progress])

  return (
    <Center>
      <Html
        as='div'
        position-x={-0.7}
        position-y={0.6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span className='canvas-loader'></span>
        <p
          style={{
            fontSize: 40,
            color: "#F1F1F1",
            fontWeight: 800,
            marginTop: 100,
          }}
        >
          {loader.current.value.toFixed(2)}%
        </p>
      </Html>
    </Center>

  );
};

export default Load;