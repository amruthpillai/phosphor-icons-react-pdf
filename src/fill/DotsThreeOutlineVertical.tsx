import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function DotsThreeOutlineVerticalIcon({
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
			<Path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128ZM128,76a28,28,0,1,0-28-28A28,28,0,0,0,128,76Zm0,104a28,28,0,1,0,28,28A28,28,0,0,0,128,180Z" />
		</Svg>
	);
}

export { DotsThreeOutlineVerticalIcon as DotsThreeOutlineVertical };
