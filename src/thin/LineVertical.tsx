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
			<Path d="M132,24V232a4,4,0,0,1-8,0V24a4,4,0,0,1,8,0Z" />
		</Svg>
	);
}

export { LineVerticalIcon as LineVertical };
