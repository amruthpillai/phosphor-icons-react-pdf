import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function ArrowBendLeftUpIcon({
	color = "currentColor",
	size = 16,
	...props
}: IconProps) {
	return (
		<Svg
			viewBox="0 0 256 256"
			fill={color}
			width={size}
			height={size}
			{...props}
		>
			<Path d="M212,224a12,12,0,0,1-12,12A108.12,108.12,0,0,1,92,128V61L64.49,88.49a12,12,0,0,1-17-17l48-48a12,12,0,0,1,17,0l48,48a12,12,0,0,1-17,17L116,61v67a84.09,84.09,0,0,0,84,84A12,12,0,0,1,212,224Z" />
		</Svg>
	);
}

export { ArrowBendLeftUpIcon as ArrowBendLeftUp };
