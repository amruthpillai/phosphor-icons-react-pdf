import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function TowelIcon({
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
			<Path d="M184,192v24a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V192Z" opacity="0.2" />
			<Path d="M200,24H72A24,24,0,0,0,48,48V216a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V48a8,8,0,0,1,16,0V152a8,8,0,0,0,16,0V48A24,24,0,0,0,200,24ZM72,40H177.37A23.84,23.84,0,0,0,176,48V184H64V48A8,8,0,0,1,72,40ZM64,216V200H176v16Z" />
		</Svg>
	);
}

export { TowelIcon as Towel };
