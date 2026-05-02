import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function ArrowDownRightIcon({
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
			<Path d="M200,88V192a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h84.69L58.34,69.66A8,8,0,0,1,69.66,58.34L184,172.69V88a8,8,0,0,1,16,0Z" />
		</Svg>
	);
}

export { ArrowDownRightIcon as ArrowDownRight };
