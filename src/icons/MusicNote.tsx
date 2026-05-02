import { MusicNoteIcon as MusicNoteBoldIcon } from "../bold/MusicNote";
import { MusicNoteIcon as MusicNoteDuotoneIcon } from "../duotone/MusicNote";
import { MusicNoteIcon as MusicNoteFillIcon } from "../fill/MusicNote";
import { MusicNoteIcon as MusicNoteLightIcon } from "../light/MusicNote";
import { MusicNoteIcon as MusicNoteRegularIcon } from "../regular/MusicNote";
import { MusicNoteIcon as MusicNoteThinIcon } from "../thin/MusicNote";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MusicNoteThinIcon,
	light: MusicNoteLightIcon,
	regular: MusicNoteRegularIcon,
	bold: MusicNoteBoldIcon,
	fill: MusicNoteFillIcon,
	duotone: MusicNoteDuotoneIcon,
} as const;

export function MusicNoteIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MusicNoteIcon as MusicNote };
