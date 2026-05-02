import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function GenderMaleIcon({
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
			<Path d="M216,36H168a4,4,0,0,0,0,8h38.35L154.82,95.52a76,76,0,1,0,5.66,5.66L212,49.66V88a4,4,0,0,0,8,0V40A4,4,0,0,0,216,36ZM152.07,200.11a68,68,0,1,1,0-96.18A68.08,68.08,0,0,1,152.07,200.11Z" />
		</Svg>
	);
}

export { GenderMaleIcon as GenderMale };
