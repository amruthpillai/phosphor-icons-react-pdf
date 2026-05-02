import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function BowlingBallIcon({
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
			<Path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm14-102a10,10,0,1,1-10-10A10,10,0,0,1,142,116Zm22-14a10,10,0,1,1,10-10A10,10,0,0,1,164,102Zm18,30a10,10,0,1,1-10-10A10,10,0,0,1,182,132Z" />
		</Svg>
	);
}

export { BowlingBallIcon as BowlingBall };
