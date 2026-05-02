import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../types";

export function MusicNotesSimpleIcon({
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
			<Path d="M215.38,14.54a12,12,0,0,0-10.29-2.18l-128,32A12,12,0,0,0,68,56V159.35A40,40,0,1,0,92,196V65.37l104-26v88A40,40,0,1,0,220,164V24A12,12,0,0,0,215.38,14.54ZM52,212a16,16,0,1,1,16-16A16,16,0,0,1,52,212Zm128-32a16,16,0,1,1,16-16A16,16,0,0,1,180,180Z" />
		</Svg>
	);
}

export { MusicNotesSimpleIcon as MusicNotesSimple };
