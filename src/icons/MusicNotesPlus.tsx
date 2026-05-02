import { MusicNotesPlusIcon as MusicNotesPlusBoldIcon } from "../bold/MusicNotesPlus";
import { MusicNotesPlusIcon as MusicNotesPlusDuotoneIcon } from "../duotone/MusicNotesPlus";
import { MusicNotesPlusIcon as MusicNotesPlusFillIcon } from "../fill/MusicNotesPlus";
import { MusicNotesPlusIcon as MusicNotesPlusLightIcon } from "../light/MusicNotesPlus";
import { MusicNotesPlusIcon as MusicNotesPlusRegularIcon } from "../regular/MusicNotesPlus";
import { MusicNotesPlusIcon as MusicNotesPlusThinIcon } from "../thin/MusicNotesPlus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MusicNotesPlusThinIcon,
	light: MusicNotesPlusLightIcon,
	regular: MusicNotesPlusRegularIcon,
	bold: MusicNotesPlusBoldIcon,
	fill: MusicNotesPlusFillIcon,
	duotone: MusicNotesPlusDuotoneIcon,
} as const;

export function MusicNotesPlusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MusicNotesPlusIcon as MusicNotesPlus };
