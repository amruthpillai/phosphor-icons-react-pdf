import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function TextHOneIcon({
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
			<Path d="M230,112v96a6,6,0,0,1-12,0V123.21L203.33,133a6,6,0,0,1-6.66-10l24-16a6,6,0,0,1,9.33,5ZM144,50a6,6,0,0,0-6,6v54H46V56a6,6,0,0,0-12,0V176a6,6,0,0,0,12,0V122h92v54a6,6,0,0,0,12,0V56A6,6,0,0,0,144,50Z" />
		</Svg>
	);
}

export { TextHOneIcon as TextHOne };
