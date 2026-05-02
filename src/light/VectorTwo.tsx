import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function VectorTwoIcon({
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
			<Path d="M228.24,196.24l-32,32a6,6,0,0,1-8.48-8.48L209.51,198H80a6,6,0,0,1-6-6V54.49L52.24,76.24a6,6,0,0,1-8.48-8.48l32-32a6,6,0,0,1,8.48,0l32,32a6,6,0,1,1-8.48,8.48L86,54.49V186H209.51l-21.75-21.76a6,6,0,0,1,8.48-8.48l32,32A6,6,0,0,1,228.24,196.24Z" />
		</Svg>
	);
}

export { VectorTwoIcon as VectorTwo };
