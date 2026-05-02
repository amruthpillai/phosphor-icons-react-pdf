import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function CaretUpIcon({
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
			<Path d="M208,160H48l80-80Z" opacity="0.2" />
			<Path d="M213.66,154.34l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,168H208a8,8,0,0,0,5.66-13.66ZM67.31,152,128,91.31,188.69,152Z" />
		</Svg>
	);
}

export { CaretUpIcon as CaretUp };
