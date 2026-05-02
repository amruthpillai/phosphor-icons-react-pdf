import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function ArrowElbowLeftUpIcon({
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
			<Path d="M236,192a4,4,0,0,1-4,4H88a4,4,0,0,1-4-4V57.66L42.83,98.83a4,4,0,0,1-5.66-5.66l48-48a4,4,0,0,1,5.66,0l48,48a4,4,0,0,1-5.66,5.66L92,57.66V188H232A4,4,0,0,1,236,192Z" />
		</Svg>
	);
}

export { ArrowElbowLeftUpIcon as ArrowElbowLeftUp };
