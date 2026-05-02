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
			<Path d="M228,112v96a4,4,0,0,1-8,0V119.47l-17.78,11.86a4,4,0,1,1-4.44-6.66l24-16A4,4,0,0,1,228,112ZM144,52a4,4,0,0,0-4,4v56H44V56a4,4,0,0,0-8,0V176a4,4,0,0,0,8,0V120h96v56a4,4,0,0,0,8,0V56A4,4,0,0,0,144,52Z" />
		</Svg>
	);
}

export { TextHOneIcon as TextHOne };
