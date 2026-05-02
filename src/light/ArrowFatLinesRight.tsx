import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function ArrowFatLinesRightIcon({
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
			<Path d="M236.24,123.76l-96-96A6,6,0,0,0,130,32V74H104a6,6,0,0,0-6,6v96a6,6,0,0,0,6,6h26v42a6,6,0,0,0,10.24,4.24l96-96A6,6,0,0,0,236.24,123.76ZM142,209.51V176a6,6,0,0,0-6-6H110V86h26a6,6,0,0,0,6-6V46.49L223.51,128ZM46,80v96a6,6,0,0,1-12,0V80a6,6,0,0,1,12,0Zm32,0v96a6,6,0,0,1-12,0V80a6,6,0,0,1,12,0Z" />
		</Svg>
	);
}

export { ArrowFatLinesRightIcon as ArrowFatLinesRight };
