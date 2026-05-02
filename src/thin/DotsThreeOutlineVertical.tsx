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
			<Path d="M128,100a28,28,0,1,0,28,28A28,28,0,0,0,128,100Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,128,148Zm0-72a28,28,0,1,0-28-28A28,28,0,0,0,128,76Zm0-48a20,20,0,1,1-20,20A20,20,0,0,1,128,28Zm0,152a28,28,0,1,0,28,28A28,28,0,0,0,128,180Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,128,228Z" />
		</Svg>
	);
}

export { DotsThreeOutlineVerticalIcon as DotsThreeOutlineVertical };
