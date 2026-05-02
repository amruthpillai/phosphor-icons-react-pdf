import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function IntersectionIcon({
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
			<Path d="M208,120v80a8,8,0,0,1-16,0V120a64,64,0,0,0-128,0v80a8,8,0,0,1-16,0V120a80,80,0,0,1,160,0Z" />
		</Svg>
	);
}

export { IntersectionIcon as Intersection };
