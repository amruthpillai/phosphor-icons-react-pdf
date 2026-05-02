import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function MartiniIcon({
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
			<Path d="M200,72l-72,72L56,72Z" opacity="0.2" />
			<Path d="M237.66,45.66A8,8,0,0,0,232,32H24a8,8,0,0,0-5.66,13.66L120,147.31V208H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V147.31ZM75.31,80H180.69L128,132.69ZM212.69,48l-16,16H59.31l-16-16Z" />
		</Svg>
	);
}

export { MartiniIcon as Martini };
