import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function CellSignalFullIcon({
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
			<Path d="M208,40V200a16,16,0,0,1-16,16H32A16,16,0,0,1,20.7,188.68l160-160A16,16,0,0,1,208,40Z" />
		</Svg>
	);
}

export { CellSignalFullIcon as CellSignalFull };
