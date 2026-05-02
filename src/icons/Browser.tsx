import { BrowserIcon as BrowserBoldIcon } from "../bold/Browser";
import { BrowserIcon as BrowserDuotoneIcon } from "../duotone/Browser";
import { BrowserIcon as BrowserFillIcon } from "../fill/Browser";
import { BrowserIcon as BrowserLightIcon } from "../light/Browser";
import { BrowserIcon as BrowserRegularIcon } from "../regular/Browser";
import { BrowserIcon as BrowserThinIcon } from "../thin/Browser";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BrowserThinIcon,
	light: BrowserLightIcon,
	regular: BrowserRegularIcon,
	bold: BrowserBoldIcon,
	fill: BrowserFillIcon,
	duotone: BrowserDuotoneIcon,
} as const;

export function BrowserIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BrowserIcon as Browser };
