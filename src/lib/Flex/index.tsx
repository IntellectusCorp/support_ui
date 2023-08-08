import { ReactNode } from "react";

export interface FlexProps {
  children: ReactNode;
  style: React.CSSProperties;
  // 가운데 정렬
  center?: boolean;
}
const Flex = ({ children, style, center = false }: FlexProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: center ? "center" : "normal",
        justifyContent: center ? "center" : "normal",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
