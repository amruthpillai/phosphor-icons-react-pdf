import { MusicNotesIcon as MusicNotesBoldIcon } from "../bold/MusicNotes";
import { MusicNotesIcon as MusicNotesDuotoneIcon } from "../duotone/MusicNotes";
import { MusicNotesIcon as MusicNotesFillIcon } from "../fill/MusicNotes";
import { MusicNotesIcon as MusicNotesLightIcon } from "../light/MusicNotes";
import { MusicNotesIcon as MusicNotesRegularIcon } from "../regular/MusicNotes";
import { MusicNotesIcon as MusicNotesThinIcon } from "../thin/MusicNotes";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MusicNotesThinIcon,
	light: MusicNotesLightIcon,
	regular: MusicNotesRegularIcon,
	bold: MusicNotesBoldIcon,
	fill: MusicNotesFillIcon,
	duotone: MusicNotesDuotoneIcon,
} as const;

export function MusicNotesIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MusicNotesIcon as MusicNotes };
