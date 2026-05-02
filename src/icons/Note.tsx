import { NoteIcon as NoteBoldIcon } from "../bold/Note";
import { NoteIcon as NoteDuotoneIcon } from "../duotone/Note";
import { NoteIcon as NoteFillIcon } from "../fill/Note";
import { NoteIcon as NoteLightIcon } from "../light/Note";
import { NoteIcon as NoteRegularIcon } from "../regular/Note";
import { NoteIcon as NoteThinIcon } from "../thin/Note";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NoteThinIcon,
	light: NoteLightIcon,
	regular: NoteRegularIcon,
	bold: NoteBoldIcon,
	fill: NoteFillIcon,
	duotone: NoteDuotoneIcon,
} as const;

export function NoteIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NoteIcon as Note };
