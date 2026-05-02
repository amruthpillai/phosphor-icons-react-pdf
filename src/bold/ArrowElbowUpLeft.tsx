import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function ArrowElbowUpLeftIcon({
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
			<Path d="M204,80V224a12,12,0,0,1-24,0V92H77l27.52,27.51a12,12,0,0,1-17,17l-48-48a12,12,0,0,1,0-17l48-48a12,12,0,1,1,17,17L77,68H192A12,12,0,0,1,204,80Z" />
		</Svg>
	);
}

export { ArrowElbowUpLeftIcon as ArrowElbowUpLeft };
