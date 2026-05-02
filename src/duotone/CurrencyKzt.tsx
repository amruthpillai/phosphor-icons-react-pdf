import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function CurrencyKztIcon({
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
			<Path d="M200,56V96H56V56Z" opacity="0.2" />
			<Path d="M208,96a8,8,0,0,1-8,8H136V216a8,8,0,0,1-16,0V104H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,96ZM56,64H200a8,8,0,0,0,0-16H56a8,8,0,0,0,0,16Z" />
		</Svg>
	);
}

export { CurrencyKztIcon as CurrencyKzt };
