import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function NumberSquareFourIcon({
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
			<Path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204ZM88,164h44v12a12,12,0,0,0,24,0V164h4a12,12,0,0,0,0-24h-4V80a12,12,0,0,0-21.47-7.37l-56,72A12,12,0,0,0,88,164Zm44-49v25H112.54Z" />
		</Svg>
	);
}

export { NumberSquareFourIcon as NumberSquareFour };
