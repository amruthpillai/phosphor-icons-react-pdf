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
			<Path d="M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128Z" />
		</Svg>
	);
}

export { DotIcon as Dot };
