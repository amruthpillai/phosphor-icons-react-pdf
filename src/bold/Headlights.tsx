import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function HeadlightsIcon({
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
			<Path d="M164,80a12,12,0,0,1,12-12h64a12,12,0,0,1,0,24H176A12,12,0,0,1,164,80Zm76,84H176a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24Zm0-48H176a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24ZM148,64V192a20,20,0,0,1-20,20H88A84,84,0,0,1,4,127.37C4.34,81.4,42.43,44,88.9,44H128A20,20,0,0,1,148,64Zm-24,4H88.9C55.57,68,28.25,94.71,28,127.54A60,60,0,0,0,88,188h36Z" />
		</Svg>
	);
}

export { HeadlightsIcon as Headlights };
