import { NoteBlankIcon as NoteBlankBoldIcon } from "../bold/NoteBlank";
import { NoteBlankIcon as NoteBlankDuotoneIcon } from "../duotone/NoteBlank";
import { NoteBlankIcon as NoteBlankFillIcon } from "../fill/NoteBlank";
import { NoteBlankIcon as NoteBlankLightIcon } from "../light/NoteBlank";
import { NoteBlankIcon as NoteBlankRegularIcon } from "../regular/NoteBlank";
import { NoteBlankIcon as NoteBlankThinIcon } from "../thin/NoteBlank";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NoteBlankThinIcon,
	light: NoteBlankLightIcon,
	regular: NoteBlankRegularIcon,
	bold: NoteBlankBoldIcon,
	fill: NoteBlankFillIcon,
	duotone: NoteBlankDuotoneIcon,
} as const;

export function NoteBlankIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NoteBlankIcon as NoteBlank };
