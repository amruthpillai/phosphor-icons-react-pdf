import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function SupersetOfIcon({
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
			<Path d="M214,200a6,6,0,0,1-6,6H56a6,6,0,0,1,0-12H208A6,6,0,0,1,214,200Zm-62-46H56a6,6,0,0,0,0,12h96a62,62,0,0,0,0-124H56a6,6,0,0,0,0,12h96a50,50,0,0,1,0,100Z" />
		</Svg>
	);
}

export { SupersetOfIcon as SupersetOf };
