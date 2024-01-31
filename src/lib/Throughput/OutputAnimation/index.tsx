import AnimatedDot from './AnimatedDot';

interface OutputAnimationProps {
  data: Array<unknown>;
  height: number;
}

const OutputAnimation = ({ data, height }: OutputAnimationProps) => {
  return (
    <div
      style={{
        width: 100,
        height,
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}>
      {data.map((_, idx) => {
        return <AnimatedDot key={`animated-dots-out-${Math.random()}`} index={idx} height={height} color='skyblue' />;
      })}
    </div>
  );
};

export default OutputAnimation;
