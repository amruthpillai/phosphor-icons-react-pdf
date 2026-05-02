import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function ArrowsMergeIcon({
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
			<Path d="M196,40v64a12,12,0,0,1-3.51,8.49L140,165V203l11.51-11.52a12,12,0,0,1,17,17l-32,32a12,12,0,0,1-17,0l-32-32a12,12,0,0,1,17-17L116,203V165L63.51,112.49A12,12,0,0,1,60,104V40a12,12,0,0,1,24,0V99l44,44,44-44V40a12,12,0,0,1,24,0Z" />
		</Svg>
	);
}

export { ArrowsMergeIcon as ArrowsMerge };
