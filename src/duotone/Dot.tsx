import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function DotIcon({
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
			<Path d="M176,128a48,48,0,1,1-48-48A48,48,0,0,1,176,128Z" opacity="0.2" />
			<Path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z" />
		</Svg>
	);
}

export { DotIcon as Dot };
