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
			<Path
				d="M208,104a56,56,0,0,1-56,56H56V48h96A56,56,0,0,1,208,104Z"
				opacity="0.2"
			/>
			<Path d="M216,200a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H208A8,8,0,0,1,216,200Zm-64-48H56a8,8,0,0,0,0,16h96a64,64,0,0,0,0-128H56a8,8,0,0,0,0,16h96a48,48,0,0,1,0,96Z" />
		</Svg>
	);
}

export { SupersetOfIcon as SupersetOf };
