import { SvgIconProps } from "../types";

export const Img = ({
  alt,
  src,
  width = "100%",
  height = "100%",
}: SvgIconProps) => <img src={src} alt={alt} width={width} height={height} />;
