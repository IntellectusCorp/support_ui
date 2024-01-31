import { ReactNode } from "react";

interface GraphSectionProps {
  maxWidth: number;
  percentage: number;
  backgroundColor: string;
  children?: ReactNode;
}

const GraphSection = ({
  maxWidth,
  percentage,
  backgroundColor,
  children,
}: GraphSectionProps) => {
  return (
    <div style={{
      transition: 'width ease .7s',
      position: 'relative',
      backgroundColor,
      width: maxWidth * percentage
    }}>
      {children}
    </div>
  );
};

export default GraphSection;
