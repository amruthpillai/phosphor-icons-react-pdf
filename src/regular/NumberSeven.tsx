import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function NumberSevenIcon({
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
			<Path d="M175.66,50.3l-48,160a8,8,0,0,1-15.32-4.6L157.25,56H88a8,8,0,0,1,0-16h80a8,8,0,0,1,7.66,10.3Z" />
		</Svg>
	);
}

export { NumberSevenIcon as NumberSeven };
