import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function CaretDoubleDownIcon({
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
			<Path d="M215.39,132.94a8,8,0,0,1-1.73,8.72l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,128h60.69L42.34,61.66A8,8,0,0,1,48,48H208a8,8,0,0,1,5.66,13.66L147.31,128H208A8,8,0,0,1,215.39,132.94Z" />
		</Svg>
	);
}

export { CaretDoubleDownIcon as CaretDoubleDown };
