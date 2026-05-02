import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function MapPinSimpleIcon({
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
			<Path d="M136,127.42V232a8,8,0,0,1-16,0V127.42a56,56,0,1,1,16,0Z" />
		</Svg>
	);
}

export { MapPinSimpleIcon as MapPinSimple };
