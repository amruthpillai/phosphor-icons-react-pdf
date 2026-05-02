import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function ArrowSquareLeftIcon({
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
			<Path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204ZM79.51,136.49a12,12,0,0,1,0-17l32-32a12,12,0,0,1,17,17L117,116h51a12,12,0,0,1,0,24H117l11.52,11.51a12,12,0,0,1-17,17Z" />
		</Svg>
	);
}

export { ArrowSquareLeftIcon as ArrowSquareLeft };
