import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function DotsThreeCircleVerticalIcon({
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
			<Path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM138,84a10,10,0,1,1-10-10A10,10,0,0,1,138,84Zm0,44a10,10,0,1,1-10-10A10,10,0,0,1,138,128Zm0,44a10,10,0,1,1-10-10A10,10,0,0,1,138,172Z" />
		</Svg>
	);
}

export { DotsThreeCircleVerticalIcon as DotsThreeCircleVertical };
