import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function DotOutlineIcon({
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
			<Path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" />
		</Svg>
	);
}

export { DotOutlineIcon as DotOutline };
