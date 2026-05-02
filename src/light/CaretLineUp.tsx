import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function CaretLineUpIcon({
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
			<Path d="M212.24,196.24a6,6,0,0,1-8.48,0L128,120.49,52.24,196.24a6,6,0,0,1-8.48-8.48l80-80a6,6,0,0,1,8.48,0l80,80A6,6,0,0,1,212.24,196.24ZM48,78H208a6,6,0,0,0,0-12H48a6,6,0,0,0,0,12Z" />
		</Svg>
	);
}

export { CaretLineUpIcon as CaretLineUp };
