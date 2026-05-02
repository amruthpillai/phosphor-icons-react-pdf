import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function CaretLineDownIcon({
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
			<Path d="M43.76,76.24a6,6,0,0,1,8.48-8.48L128,143.51l75.76-75.75a6,6,0,0,1,8.48,8.48l-80,80a6,6,0,0,1-8.48,0ZM208,186H48a6,6,0,0,0,0,12H208a6,6,0,0,0,0-12Z" />
		</Svg>
	);
}

export { CaretLineDownIcon as CaretLineDown };
