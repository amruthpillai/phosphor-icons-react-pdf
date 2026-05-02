import { ClipboardIcon as ClipboardBoldIcon } from "../bold/Clipboard";
import { ClipboardIcon as ClipboardDuotoneIcon } from "../duotone/Clipboard";
import { ClipboardIcon as ClipboardFillIcon } from "../fill/Clipboard";
import { ClipboardIcon as ClipboardLightIcon } from "../light/Clipboard";
import { ClipboardIcon as ClipboardRegularIcon } from "../regular/Clipboard";
import { ClipboardIcon as ClipboardThinIcon } from "../thin/Clipboard";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ClipboardThinIcon,
	light: ClipboardLightIcon,
	regular: ClipboardRegularIcon,
	bold: ClipboardBoldIcon,
	fill: ClipboardFillIcon,
	duotone: ClipboardDuotoneIcon,
} as const;

export function ClipboardIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ClipboardIcon as Clipboard };
