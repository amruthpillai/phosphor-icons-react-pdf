import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function NumberCircleEightIcon({
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
			<Path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm14.9-96.31a28,28,0,1,0-29.8,0,32,32,0,1,0,29.8,0ZM108,100a20,20,0,1,1,20,20A20,20,0,0,1,108,100Zm20,76a24,24,0,1,1,24-24A24,24,0,0,1,128,176Z" />
		</Svg>
	);
}

export { NumberCircleEightIcon as NumberCircleEight };
