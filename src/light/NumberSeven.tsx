import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function NumberSevenIcon({
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
			<Path d="M173.75,49.72l-48,160a6,6,0,1,1-11.5-3.45L159.94,54H88a6,6,0,0,1,0-12h80a6,6,0,0,1,5.75,7.72Z" />
		</Svg>
	);
}

export { NumberSevenIcon as NumberSeven };
