import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function CellSignalLowIcon({
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
			<Path d="M86,152v48a6,6,0,0,1-12,0V152a6,6,0,0,1,12,0ZM40,186a6,6,0,0,0-6,6v8a6,6,0,0,0,12,0v-8A6,6,0,0,0,40,186Z" />
		</Svg>
	);
}

export { CellSignalLowIcon as CellSignalLow };
