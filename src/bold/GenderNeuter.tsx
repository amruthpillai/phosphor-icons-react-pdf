import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function GenderNeuterIcon({
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
			<Path d="M212,104a84,84,0,1,0-96,83.13V232a12,12,0,0,0,24,0V187.13A84.12,84.12,0,0,0,212,104Zm-84,60a60,60,0,1,1,60-60A60.07,60.07,0,0,1,128,164Z" />
		</Svg>
	);
}

export { GenderNeuterIcon as GenderNeuter };
