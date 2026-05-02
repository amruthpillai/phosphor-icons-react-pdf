import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function ChartBarHorizontalIcon({
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
			<Path d="M224,100H180V56a4,4,0,0,0-4-4H52V40a4,4,0,0,0-8,0V216a4,4,0,0,0,8,0V204h92a4,4,0,0,0,4-4V156h76a4,4,0,0,0,4-4V104A4,4,0,0,0,224,100ZM172,60v40H52V60ZM140,196H52V156h88Zm80-48H52V108H220Z" />
		</Svg>
	);
}

export { ChartBarHorizontalIcon as ChartBarHorizontal };
