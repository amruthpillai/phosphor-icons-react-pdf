import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function WaveTriangleIcon({
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
			<Path d="M235.24,130.34l-52,72a4,4,0,0,1-6.48,0L76,62.83,27.24,130.34a4,4,0,1,1-6.48-4.68l52-72a4,4,0,0,1,6.48,0L180,193.17l48.76-67.51a4,4,0,0,1,6.48,4.68Z" />
		</Svg>
	);
}

export { WaveTriangleIcon as WaveTriangle };
