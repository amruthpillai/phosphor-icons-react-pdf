import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function CellSignalLowIcon({
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
			<Path d="M80,140.7V208H32a8,8,0,0,1-5.66-13.66Z" opacity="0.2" />
			<Path d="M198.12,25.23a16,16,0,0,0-17.44,3.46l-160,160A16,16,0,0,0,32,216H192a16,16,0,0,0,16-16V40A15.94,15.94,0,0,0,198.12,25.23ZM72,160v40H32Zm120,40H88V144L192,40Z" />
		</Svg>
	);
}

export { CellSignalLowIcon as CellSignalLow };
