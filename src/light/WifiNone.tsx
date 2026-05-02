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
			<Path d="M138,204a10,10,0,1,1-10-10A10,10,0,0,1,138,204Z" />
		</Svg>
	);
}

export { WifiNoneIcon as WifiNone };
