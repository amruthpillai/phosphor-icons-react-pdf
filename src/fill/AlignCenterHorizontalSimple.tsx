import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function AlignCenterHorizontalSimpleIcon({
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
			<Path d="M224,96v64a16,16,0,0,1-16,16H136v32a8,8,0,0,1-16,0V176H48a16,16,0,0,1-16-16V96A16,16,0,0,1,48,80h72V48a8,8,0,0,1,16,0V80h72A16,16,0,0,1,224,96Z" />
		</Svg>
	);
}

export { AlignCenterHorizontalSimpleIcon as AlignCenterHorizontalSimple };
