import styled from "styled-components";
import { useSpring, animated } from "react-spring";

export const Animatedcontainer = styled(animated.div)`
  display: inline-block;
  padding: 3em;
  border-radius: 10px;
  z-index: 1;
  position: relative;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  background-clip: boder-box;
  cursor: pointer;
`;

export const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
export const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
