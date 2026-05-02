import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function CodeSimpleIcon({
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
			<Path d="M90.66,67,22,128l68.64,61a4,4,0,0,1-5.32,6l-72-64a4,4,0,0,1,0-6l72-64a4,4,0,1,1,5.32,6Zm152,58-72-64a4,4,0,1,0-5.32,6L234,128l-68.64,61a4,4,0,0,0,5.32,6l72-64a4,4,0,0,0,0-6Z" />
		</Svg>
	);
}

export { CodeSimpleIcon as CodeSimple };
