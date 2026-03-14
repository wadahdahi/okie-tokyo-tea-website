import { SHAPES } from "../../constants/shapes";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <div className="relative inline-block">
      <img
        src={SHAPES.LOGO.OKIE_LOGO_LIGHT}
        alt="Okie Tokyo Tea logo"
        className={`${className} w-40`}
      />
      <span className="absolute top-1 -right-2 text-[12px] font-black text-brand-accent/80">
        ™
      </span>
    </div>
  );
}


