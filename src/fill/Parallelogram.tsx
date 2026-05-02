import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function ParallelogramIcon({
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
			<Path d="M246.58,62.57l-64.8,144A16,16,0,0,1,167.19,216H24A16,16,0,0,1,9.42,193.43l64.8-144A16,16,0,0,1,88.81,40H232a16,16,0,0,1,14.59,22.57Z" />
		</Svg>
	);
}

export { ParallelogramIcon as Parallelogram };
