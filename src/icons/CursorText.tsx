import { CursorTextIcon as CursorTextBoldIcon } from "../bold/CursorText";
import { CursorTextIcon as CursorTextDuotoneIcon } from "../duotone/CursorText";
import { CursorTextIcon as CursorTextFillIcon } from "../fill/CursorText";
import { CursorTextIcon as CursorTextLightIcon } from "../light/CursorText";
import { CursorTextIcon as CursorTextRegularIcon } from "../regular/CursorText";
import { CursorTextIcon as CursorTextThinIcon } from "../thin/CursorText";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CursorTextThinIcon,
	light: CursorTextLightIcon,
	regular: CursorTextRegularIcon,
	bold: CursorTextBoldIcon,
	fill: CursorTextFillIcon,
	duotone: CursorTextDuotoneIcon,
} as const;

export function CursorTextIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CursorTextIcon as CursorText };
