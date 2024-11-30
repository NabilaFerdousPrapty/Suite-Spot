// components/Shared/LoadingSpinner.tsx
import { FC } from "react";
import { ScaleLoader } from "react-spinners";

interface LoadingSpinnerProps {
  smallHeight?: boolean;
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({ smallHeight }) => {
  return (
    <div
      className={`${
        smallHeight ? "h-[250px]" : "h-[70vh]"
      } flex flex-col justify-center items-center`}
    >
      <ScaleLoader size={100} color="red" />
    </div>
  );
};

export default LoadingSpinner;
