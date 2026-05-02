import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function UnionIcon({
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
			<Path d="M204,64v80a76,76,0,0,1-152,0V64a4,4,0,0,1,8,0v80a68,68,0,0,0,136,0V64a4,4,0,0,1,8,0Z" />
		</Svg>
	);
}

export { UnionIcon as Union };
