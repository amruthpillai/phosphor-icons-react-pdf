import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function NumpadIcon({
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
			<Path d="M76,48A12,12,0,1,1,64,36,12,12,0,0,1,76,48Zm52-12a12,12,0,1,0,12,12A12,12,0,0,0,128,36Zm64,24a12,12,0,1,0-12-12A12,12,0,0,0,192,60ZM64,92a12,12,0,1,0,12,12A12,12,0,0,0,64,92Zm64,0a12,12,0,1,0,12,12A12,12,0,0,0,128,92Zm64,0a12,12,0,1,0,12,12A12,12,0,0,0,192,92ZM64,148a12,12,0,1,0,12,12A12,12,0,0,0,64,148Zm64,0a12,12,0,1,0,12,12A12,12,0,0,0,128,148Zm0,56a12,12,0,1,0,12,12A12,12,0,0,0,128,204Zm64-56a12,12,0,1,0,12,12A12,12,0,0,0,192,148Z" />
		</Svg>
	);
}

export { NumpadIcon as Numpad };
