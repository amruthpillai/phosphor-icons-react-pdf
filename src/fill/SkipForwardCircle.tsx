import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function SkipForwardCircleIcon({
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
			<Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,144a8,8,0,0,1-16,0V137.83l-51.35,36.68A8,8,0,0,1,88,168V88a8,8,0,0,1,12.65-6.51L152,118.17V88a8,8,0,0,1,16,0Z" />
		</Svg>
	);
}

export { SkipForwardCircleIcon as SkipForwardCircle };
