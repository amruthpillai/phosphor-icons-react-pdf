import { XIcon as XBoldIcon } from "../bold/X";
import { XIcon as XDuotoneIcon } from "../duotone/X";
import { XIcon as XFillIcon } from "../fill/X";
import { XIcon as XLightIcon } from "../light/X";
import { XIcon as XRegularIcon } from "../regular/X";
import { XIcon as XThinIcon } from "../thin/X";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: XThinIcon,
	light: XLightIcon,
	regular: XRegularIcon,
	bold: XBoldIcon,
	fill: XFillIcon,
	duotone: XDuotoneIcon,
} as const;

export function XIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { XIcon as X };
