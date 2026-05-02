import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function CircleHalfTiltIcon({
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
			<Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM40,128A88,88,0,0,1,190.2,65.8L65.8,190.2A87.76,87.76,0,0,1,40,128Z" />
		</Svg>
	);
}

export { CircleHalfTiltIcon as CircleHalfTilt };
