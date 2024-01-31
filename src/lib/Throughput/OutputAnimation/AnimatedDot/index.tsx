import { useEffect, useMemo, useState } from 'react';
import styles from './index.module.css';

interface AnimatedDotProps {
  index: number;
  height: number;
  color: string;
}
const AnimatedDot = ({ index, height, color }: AnimatedDotProps) => {
  const [left, setLeft] = useState(-6);
  const [top, setTop] = useState(height / 2);
  const [opacity, setOpacity] = useState(1);
  const dynamicStyle = useMemo(() => {
    return {
      backgroundColor: color,
      top: top,
      left: left,
      opacity: opacity,
      transitionDelay: `.${index}s`,
    };
  }, [top, left, opacity, color, index]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLeft(100);
      setTop((height / 6) * Math.random() * 6);
      setOpacity(0);
    }, index);
    return () => {
      clearTimeout(timeout);
    };
  }, [index, height]);

  return <div className={styles.componentContainer} style={dynamicStyle} />;
};

export default AnimatedDot;
