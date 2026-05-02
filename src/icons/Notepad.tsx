import { NotepadIcon as NotepadBoldIcon } from "../bold/Notepad";
import { NotepadIcon as NotepadDuotoneIcon } from "../duotone/Notepad";
import { NotepadIcon as NotepadFillIcon } from "../fill/Notepad";
import { NotepadIcon as NotepadLightIcon } from "../light/Notepad";
import { NotepadIcon as NotepadRegularIcon } from "../regular/Notepad";
import { NotepadIcon as NotepadThinIcon } from "../thin/Notepad";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NotepadThinIcon,
	light: NotepadLightIcon,
	regular: NotepadRegularIcon,
	bold: NotepadBoldIcon,
	fill: NotepadFillIcon,
	duotone: NotepadDuotoneIcon,
} as const;

export function NotepadIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NotepadIcon as Notepad };
