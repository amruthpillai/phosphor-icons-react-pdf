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
			<Path d="M136,204a8,8,0,1,1-8-8A8,8,0,0,1,136,204Z" />
		</Svg>
	);
}

export { WifiNoneIcon as WifiNone };
