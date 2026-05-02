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
			<Path d="M44,192v8a4,4,0,0,1-8,0v-8a4,4,0,0,1,8,0Z" />
		</Svg>
	);
}

export { CellSignalNoneIcon as CellSignalNone };
