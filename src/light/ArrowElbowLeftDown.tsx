import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function ArrowElbowLeftDownIcon({
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
			<Path d="M238,72a6,6,0,0,1-6,6H94V201.51l37.76-37.75a6,6,0,0,1,8.48,8.48l-48,48a6,6,0,0,1-8.48,0l-48-48a6,6,0,0,1,8.48-8.48L82,201.51V72a6,6,0,0,1,6-6H232A6,6,0,0,1,238,72Z" />
		</Svg>
	);
}

export { ArrowElbowLeftDownIcon as ArrowElbowLeftDown };
