import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function CirclesThreeIcon({
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
			<Path d="M168,76a40,40,0,1,0-40,40A40,40,0,0,0,168,76Zm-40,32a32,32,0,1,1,32-32A32,32,0,0,1,128,108Zm60,24a40,40,0,1,0,40,40A40,40,0,0,0,188,132Zm0,72a32,32,0,1,1,32-32A32,32,0,0,1,188,204ZM68,132a40,40,0,1,0,40,40A40,40,0,0,0,68,132Zm0,72a32,32,0,1,1,32-32A32,32,0,0,1,68,204Z" />
		</Svg>
	);
}

export { CirclesThreeIcon as CirclesThree };
