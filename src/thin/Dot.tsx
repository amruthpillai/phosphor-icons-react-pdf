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
			<Path d="M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Z" />
		</Svg>
	);
}

export { DotIcon as Dot };
