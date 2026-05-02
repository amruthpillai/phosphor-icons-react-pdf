import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function RowsIcon({
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
			<Path d="M208,140H48a12,12,0,0,0-12,12v40a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V152A12,12,0,0,0,208,140Zm4,52a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM208,52H48A12,12,0,0,0,36,64v40a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V64A12,12,0,0,0,208,52Zm4,52a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z" />
		</Svg>
	);
}

export { RowsIcon as Rows };
