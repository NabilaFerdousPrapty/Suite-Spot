// components/Shared/Heading.tsx
import { FC } from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: FC<HeadingProps> = ({ title, subtitle, center = false }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      {subtitle && (
        <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
      )}
    </div>
  );
};

export default Heading;
