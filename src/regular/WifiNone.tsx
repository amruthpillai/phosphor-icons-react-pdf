import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function WifiNoneIcon({
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
			<Path d="M140,204a12,12,0,1,1-12-12A12,12,0,0,1,140,204Z" />
		</Svg>
	);
}

export { WifiNoneIcon as WifiNone };
