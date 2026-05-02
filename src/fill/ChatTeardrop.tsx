import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function ChatTeardropIcon({
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
			<Path d="M232,124A100.11,100.11,0,0,1,132,224H48a16,16,0,0,1-16-16V124a100,100,0,0,1,200,0Z" />
		</Svg>
	);
}

export { ChatTeardropIcon as ChatTeardrop };
