import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function NoteBlankIcon({
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
			<Path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H156.69a19.86,19.86,0,0,0,14.14-5.86l51.31-51.31A19.86,19.86,0,0,0,228,156.69V48A20,20,0,0,0,208,28ZM52,52H204v92H156a12,12,0,0,0-12,12v48H52ZM168,191V168h23Z" />
		</Svg>
	);
}

export { NoteBlankIcon as NoteBlank };
