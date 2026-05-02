import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function CallBellIcon({
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
			<Path d="M24,180H232a12,12,0,0,0,0-24h-4.09A100.16,100.16,0,0,0,140,60.72V44h12a12,12,0,0,0,0-24H104a12,12,0,0,0,0,24h12V60.72A100.16,100.16,0,0,0,28.09,156H24a12,12,0,0,0,0,24ZM128,84a76.09,76.09,0,0,1,75.89,72H52.11A76.09,76.09,0,0,1,128,84ZM244,208a12,12,0,0,1-12,12H24a12,12,0,0,1,0-24H232A12,12,0,0,1,244,208Z" />
		</Svg>
	);
}

export { CallBellIcon as CallBell };
