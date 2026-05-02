import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function CircleIcon({
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
			<Path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z" />
		</Svg>
	);
}

export { CircleIcon as Circle };
