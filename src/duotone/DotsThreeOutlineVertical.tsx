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
			<Path
				d="M152,128a24,24,0,1,1-24-24A24,24,0,0,1,152,128ZM128,72a24,24,0,1,0-24-24A24,24,0,0,0,128,72Zm0,112a24,24,0,1,0,24,24A24,24,0,0,0,128,184Z"
				opacity="0.2"
			/>
			<Path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Zm0-64A32,32,0,1,0,96,48,32,32,0,0,0,128,80Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,128,32Zm0,144a32,32,0,1,0,32,32A32,32,0,0,0,128,176Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,224Z" />
		</Svg>
	);
}

export { DotsThreeOutlineVerticalIcon as DotsThreeOutlineVertical };
