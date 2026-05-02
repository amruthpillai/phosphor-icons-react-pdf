import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function TrashSimpleIcon({
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
			<Path d="M216,52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM84,24a4,4,0,0,1,4-4h80a4,4,0,0,1,0,8H88A4,4,0,0,1,84,24Z" />
		</Svg>
	);
}

export { TrashSimpleIcon as TrashSimple };
