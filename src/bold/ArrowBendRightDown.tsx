import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function ArrowBendRightDownIcon({
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
			<Path d="M208.49,184.49l-48,48a12,12,0,0,1-17,0l-48-48a12,12,0,0,1,17-17L140,195V128A84.09,84.09,0,0,0,56,44a12,12,0,0,1,0-24A108.12,108.12,0,0,1,164,128v67l27.51-27.52a12,12,0,0,1,17,17Z" />
		</Svg>
	);
}

export { ArrowBendRightDownIcon as ArrowBendRightDown };
