import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function GreaterThanIcon({
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
			<Path d="M220,128a4,4,0,0,1-2.29,3.62l-152,72A3.85,3.85,0,0,1,64,204a4,4,0,0,1-1.71-7.62L206.66,128,62.29,59.62a4,4,0,0,1,3.42-7.23l152,72A4,4,0,0,1,220,128Z" />
		</Svg>
	);
}

export { GreaterThanIcon as GreaterThan };
