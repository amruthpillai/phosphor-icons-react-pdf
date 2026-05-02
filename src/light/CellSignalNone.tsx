import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function CellSignalNoneIcon({
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
			<Path d="M46,192v8a6,6,0,0,1-12,0v-8a6,6,0,0,1,12,0Z" />
		</Svg>
	);
}

export { CellSignalNoneIcon as CellSignalNone };
