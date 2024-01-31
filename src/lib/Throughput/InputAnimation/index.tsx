import AnimatedDot from './AnimatedDot';

interface InputAnimationProps {
  data: Array<unknown>;
  height: number;
}

const InputAnimation = ({ data, height }: InputAnimationProps) => {
  return (
    <div
      style={{
        width: 100,
        height,
        flexDirection: 'column',
        position: 'relative',
        marginRight: -15,
        overflow: 'hidden',
      }}>
      {data.map((_, idx) => {
        return <AnimatedDot key={`animated-dots-${Math.random()}`} index={idx} height={height} color='skyblue' />;
      })}
    </div>
  );
};

export default InputAnimation;
