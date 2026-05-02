import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function GreaterThanOrEqualIcon({
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
			<Path d="M51.85,148.74,173.29,104,51.85,59.26a12,12,0,0,1,8.3-22.52l152,56a12,12,0,0,1,0,22.52l-152,56a12,12,0,1,1-8.3-22.52ZM208,188H56a12,12,0,0,0,0,24H208a12,12,0,0,0,0-24Z" />
		</Svg>
	);
}

export { GreaterThanOrEqualIcon as GreaterThanOrEqual };
