import { MusicNoteSimpleIcon as MusicNoteSimpleBoldIcon } from "../bold/MusicNoteSimple";
import { MusicNoteSimpleIcon as MusicNoteSimpleDuotoneIcon } from "../duotone/MusicNoteSimple";
import { MusicNoteSimpleIcon as MusicNoteSimpleFillIcon } from "../fill/MusicNoteSimple";
import { MusicNoteSimpleIcon as MusicNoteSimpleLightIcon } from "../light/MusicNoteSimple";
import { MusicNoteSimpleIcon as MusicNoteSimpleRegularIcon } from "../regular/MusicNoteSimple";
import { MusicNoteSimpleIcon as MusicNoteSimpleThinIcon } from "../thin/MusicNoteSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MusicNoteSimpleThinIcon,
	light: MusicNoteSimpleLightIcon,
	regular: MusicNoteSimpleRegularIcon,
	bold: MusicNoteSimpleBoldIcon,
	fill: MusicNoteSimpleFillIcon,
	duotone: MusicNoteSimpleDuotoneIcon,
} as const;

export function MusicNoteSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MusicNoteSimpleIcon as MusicNoteSimple };
