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
			<Path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16h80V135.42a56,56,0,1,1,16,0V208h80A8,8,0,0,1,224,216Z" />
		</Svg>
	);
}

export { MapPinSimpleLineIcon as MapPinSimpleLine };
