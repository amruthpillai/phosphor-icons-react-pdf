import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function BedIcon({
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
			<Path d="M248,112v56H112V80H216A32,32,0,0,1,248,112Z" opacity="0.2" />
			<Path d="M216,72H32V48a8,8,0,0,0-16,0V208a8,8,0,0,0,16,0V176H240v32a8,8,0,0,0,16,0V112A40,40,0,0,0,216,72ZM32,88h72v72H32Zm88,72V88h96a24,24,0,0,1,24,24v48Z" />
		</Svg>
	);
}

export { BedIcon as Bed };
