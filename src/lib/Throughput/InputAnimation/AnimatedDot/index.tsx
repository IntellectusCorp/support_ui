import { useEffect, useMemo, useState } from 'react';
import styles from './index.module.css';


interface AnimatedDotProps {
  index: number;
  height: number;
  color: string;
}
const AnimatedDot = ({ index, height, color }: AnimatedDotProps) => {
  const [left, setLeft] = useState(-6);
  const [top, setTop] = useState((height / 6) * Math.random() * 6);
  const [opacity, setOpacity] = useState(1);
  const [size, setSize] = useState(5);
  const dynamicStyle = useMemo(() => {
    return {
      width: size,
      borderRadius: size,
      backgroundColor: color,
      top: top,
      left: left,
      opacity,
      transitionDelay: `.${index}s`,
    };
  }, [size, top, left, index, opacity, color]);

  useEffect(() => {
    setTimeout(() => {
      setLeft(100);
      setTop(height / 2);
      setOpacity(0);
      setSize(10);
    }, index);
  }, [index, height]);

  return (
    <div className={styles.componentContainer} style={dynamicStyle} />
  );
};

export default AnimatedDot;
