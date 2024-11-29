import React from "react";
import { IconType } from "react-icons"; // Assuming you're using react-icons

interface CategoryBoxProps {
  label: string;
  icon: IconType; 
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ label, icon: Icon }) => {
  return (
    <div
      className={`flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        border-b-2
        hover:text-neutral-900
        hover:border-gray-800
        transition
        cursor-pointer`}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
