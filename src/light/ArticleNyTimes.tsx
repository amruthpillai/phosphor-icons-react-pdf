import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function ArticleNyTimesIcon({
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
			<Path d="M128,98H232a6,6,0,0,1,0,12H128a6,6,0,0,1,0-12Zm104,32H128a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12Zm0,32H80a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12Zm0,32H80a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM96,142a6,6,0,0,0,0-12H86V62h36V72a6,6,0,0,0,12,0V56a6,6,0,0,0-6-6H32a6,6,0,0,0-6,6V72a6,6,0,0,0,12,0V62H74v68H64a6,6,0,0,0,0,12Z" />
		</Svg>
	);
}

export { ArticleNyTimesIcon as ArticleNyTimes };
