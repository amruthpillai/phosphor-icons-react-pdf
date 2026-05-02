import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function PlaceholderIcon({
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
			<Path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,12V206.34L49.66,44H208A4,4,0,0,1,212,48ZM44,208V49.66L206.34,212H48A4,4,0,0,1,44,208Z" />
		</Svg>
	);
}

export { PlaceholderIcon as Placeholder };
