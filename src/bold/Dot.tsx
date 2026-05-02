import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function DotIcon({
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
			<Path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z" />
		</Svg>
	);
}

export { DotIcon as Dot };
