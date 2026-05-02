import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function DotsThreeVerticalIcon({
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
			<Path d="M120,60a8,8,0,1,1,8,8A8,8,0,0,1,120,60Zm8,60a8,8,0,1,0,8,8A8,8,0,0,0,128,120Zm0,68a8,8,0,1,0,8,8A8,8,0,0,0,128,188Z" />
		</Svg>
	);
}

export { DotsThreeVerticalIcon as DotsThreeVertical };
