import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function BracketsSquareIcon({
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
			<Path d="M44,44V212H80a4,4,0,0,1,0,8H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H80a4,4,0,0,1,0,8Zm172-8H176a4,4,0,0,0,0,8h36V212H176a4,4,0,0,0,0,8h40a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36Z" />
		</Svg>
	);
}

export { BracketsSquareIcon as BracketsSquare };
