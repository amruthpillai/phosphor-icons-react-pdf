import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function FileMinusIcon({
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
			<Path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,160H104a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm0-72V43.31L196.69,88Z" />
		</Svg>
	);
}

export { FileMinusIcon as FileMinus };
