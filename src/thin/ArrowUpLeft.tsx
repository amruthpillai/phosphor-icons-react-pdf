import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function ArrowUpLeftIcon({
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
			<Path d="M194.83,194.83a4,4,0,0,1-5.66,0L68,73.66V168a4,4,0,0,1-8,0V64a4,4,0,0,1,4-4H168a4,4,0,0,1,0,8H73.66L194.83,189.17A4,4,0,0,1,194.83,194.83Z" />
		</Svg>
	);
}

export { ArrowUpLeftIcon as ArrowUpLeft };
