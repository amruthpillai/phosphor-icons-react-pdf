import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function SquareSplitHorizontalIcon({
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
			<Path d="M200,36H56A20,20,0,0,0,36,56V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36ZM60,60h56V196H60ZM196,196H140V60h56Z" />
		</Svg>
	);
}

export { SquareSplitHorizontalIcon as SquareSplitHorizontal };
