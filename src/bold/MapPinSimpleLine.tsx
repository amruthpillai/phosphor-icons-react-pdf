import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function MapPinSimpleLineIcon({
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
			<Path d="M216,204H140V138.79a60,60,0,1,0-24,0V204H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24ZM92,80a36,36,0,1,1,36,36A36,36,0,0,1,92,80Z" />
		</Svg>
	);
}

export { MapPinSimpleLineIcon as MapPinSimpleLine };
