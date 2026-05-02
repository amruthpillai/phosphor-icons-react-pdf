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
			<Path d="M140,24V232a12,12,0,0,1-24,0V24a12,12,0,0,1,24,0Z" />
		</Svg>
	);
}

export { LineVerticalIcon as LineVertical };
