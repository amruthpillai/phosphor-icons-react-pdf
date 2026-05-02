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
			<Path d="M134,24V232a6,6,0,0,1-12,0V24a6,6,0,0,1,12,0Z" />
		</Svg>
	);
}

export { LineVerticalIcon as LineVertical };
