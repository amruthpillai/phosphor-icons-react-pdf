import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function LineVerticalIcon({
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
			<Path d="M136,24V232a8,8,0,0,1-16,0V24a8,8,0,0,1,16,0Z" />
		</Svg>
	);
}

export { LineVerticalIcon as LineVertical };
