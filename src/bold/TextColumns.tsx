import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function TextColumnsIcon({
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
			<Path d="M120,64a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24h68A12,12,0,0,1,120,64ZM108,92H40a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm0,40H40a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm0,40H40a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm40-96h68a12,12,0,0,0,0-24H148a12,12,0,0,0,0,24Zm68,16H148a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm0,40H148a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm0,40H148a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Z" />
		</Svg>
	);
}

export { TextColumnsIcon as TextColumns };
