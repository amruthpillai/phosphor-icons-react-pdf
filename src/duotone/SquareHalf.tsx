import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function SquareHalfIcon({
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
				d="M208,56V200a8,8,0,0,1-8,8H128V48h72A8,8,0,0,1,208,56Z"
				opacity="0.2"
			/>
			<Path d="M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40ZM56,56h64V200H56ZM200,200H136V56h64V200Z" />
		</Svg>
	);
}

export { SquareHalfIcon as SquareHalf };
