import { MusicNotesMinusIcon as MusicNotesMinusBoldIcon } from "../bold/MusicNotesMinus";
import { MusicNotesMinusIcon as MusicNotesMinusDuotoneIcon } from "../duotone/MusicNotesMinus";
import { MusicNotesMinusIcon as MusicNotesMinusFillIcon } from "../fill/MusicNotesMinus";
import { MusicNotesMinusIcon as MusicNotesMinusLightIcon } from "../light/MusicNotesMinus";
import { MusicNotesMinusIcon as MusicNotesMinusRegularIcon } from "../regular/MusicNotesMinus";
import { MusicNotesMinusIcon as MusicNotesMinusThinIcon } from "../thin/MusicNotesMinus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MusicNotesMinusThinIcon,
	light: MusicNotesMinusLightIcon,
	regular: MusicNotesMinusRegularIcon,
	bold: MusicNotesMinusBoldIcon,
	fill: MusicNotesMinusFillIcon,
	duotone: MusicNotesMinusDuotoneIcon,
} as const;

export function MusicNotesMinusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MusicNotesMinusIcon as MusicNotesMinus };
