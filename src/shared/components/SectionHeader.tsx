import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  hasBorder?: boolean;
  className?: string;
  titleColor?: string;
  subtitleColor?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  imageSrc,
  hasBorder = false,
  className = "",
  titleColor = "text-brand-text",
  subtitleColor = "text-brand-muted",
}) => {
  return (
    <div
      className={`relative flex flex-col items-start w-full py-8 mb-12 ${hasBorder ? "border-b-2 border-dashed border-brand-border" : ""} ${className}`}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt=""
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[80%] opacity-10 pointer-events-none hidden lg:block"
        />
      )}
      <h2 className={`text-4xl font-bold uppercase ${titleColor} mb-4 leading-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${subtitleColor} max-w-3xl leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

