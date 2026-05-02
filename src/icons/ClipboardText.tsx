import { ClipboardTextIcon as ClipboardTextBoldIcon } from "../bold/ClipboardText";
import { ClipboardTextIcon as ClipboardTextDuotoneIcon } from "../duotone/ClipboardText";
import { ClipboardTextIcon as ClipboardTextFillIcon } from "../fill/ClipboardText";
import { ClipboardTextIcon as ClipboardTextLightIcon } from "../light/ClipboardText";
import { ClipboardTextIcon as ClipboardTextRegularIcon } from "../regular/ClipboardText";
import { ClipboardTextIcon as ClipboardTextThinIcon } from "../thin/ClipboardText";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ClipboardTextThinIcon,
	light: ClipboardTextLightIcon,
	regular: ClipboardTextRegularIcon,
	bold: ClipboardTextBoldIcon,
	fill: ClipboardTextFillIcon,
	duotone: ClipboardTextDuotoneIcon,
} as const;

export function ClipboardTextIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ClipboardTextIcon as ClipboardText };
