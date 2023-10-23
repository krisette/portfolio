import React from "react";

interface Props {
  name: string;
  Icon?: React.ComponentType<any>;
}

function SkillPill({ name, Icon }: Props) {
  return (
    <div className="relative overflow-hidden bg-transparent border-2 border-secondary text-white p-2 rounded-lg flex items-center group m-1 lg:m-2">
      <div className="z-10 flex items-center space-x-2">
        {Icon && (
          <Icon className="inline-block align-middle mr-1" aria-hidden="true" />
        )}
        <span className="text-lg align-middle">{name}</span>
      </div>
      <span className="absolute top-0 left-0 w-full h-full bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
    </div>
  );
}

export default SkillPill;
