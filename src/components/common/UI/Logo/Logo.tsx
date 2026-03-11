import { SHAPES } from "../../../../constants/shapes";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <img
      src={SHAPES.LOGO.OKIE_LOGO_LIGHT}
      alt="okie-tokyo-tea logo"
      className={`${className} w-40`}
    />
  );
}
