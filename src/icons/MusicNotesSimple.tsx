import { MusicNotesSimpleIcon as MusicNotesSimpleBoldIcon } from "../bold/MusicNotesSimple";
import { MusicNotesSimpleIcon as MusicNotesSimpleDuotoneIcon } from "../duotone/MusicNotesSimple";
import { MusicNotesSimpleIcon as MusicNotesSimpleFillIcon } from "../fill/MusicNotesSimple";
import { MusicNotesSimpleIcon as MusicNotesSimpleLightIcon } from "../light/MusicNotesSimple";
import { MusicNotesSimpleIcon as MusicNotesSimpleRegularIcon } from "../regular/MusicNotesSimple";
import { MusicNotesSimpleIcon as MusicNotesSimpleThinIcon } from "../thin/MusicNotesSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MusicNotesSimpleThinIcon,
	light: MusicNotesSimpleLightIcon,
	regular: MusicNotesSimpleRegularIcon,
	bold: MusicNotesSimpleBoldIcon,
	fill: MusicNotesSimpleFillIcon,
	duotone: MusicNotesSimpleDuotoneIcon,
} as const;

export function MusicNotesSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MusicNotesSimpleIcon as MusicNotesSimple };
