import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function TrafficSignalIcon({
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
			<Path d="M216,144H200V80h16a8,8,0,0,0,0-16H200V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V64H40a8,8,0,0,0,0,16H56v64H40a8,8,0,0,0,0,16H56v56a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V160h16a8,8,0,0,0,0-16Zm-88-28a28,28,0,1,1,28-28A28,28,0,0,1,128,116Zm0,24a28,28,0,1,1-28,28A28,28,0,0,1,128,140Z" />
		</Svg>
	);
}

export { TrafficSignalIcon as TrafficSignal };
