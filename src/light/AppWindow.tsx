import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function AppWindowIcon({
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
			<Path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm2,158a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM78,84A10,10,0,1,1,68,74,10,10,0,0,1,78,84Zm40,0a10,10,0,1,1-10-10A10,10,0,0,1,118,84Z" />
		</Svg>
	);
}

export { AppWindowIcon as AppWindow };
