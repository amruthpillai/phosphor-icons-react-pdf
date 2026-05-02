import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function ArrowElbowUpRightIcon({
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
			<Path d="M218.83,82.83l-48,48a4,4,0,0,1-5.66-5.66L206.34,84H76V224a4,4,0,0,1-8,0V80a4,4,0,0,1,4-4H206.34L165.17,34.83a4,4,0,0,1,5.66-5.66l48,48A4,4,0,0,1,218.83,82.83Z" />
		</Svg>
	);
}

export { ArrowElbowUpRightIcon as ArrowElbowUpRight };
