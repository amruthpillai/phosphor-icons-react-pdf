import { ProhibitInsetIcon as ProhibitInsetBoldIcon } from "../bold/ProhibitInset";
import { ProhibitInsetIcon as ProhibitInsetDuotoneIcon } from "../duotone/ProhibitInset";
import { ProhibitInsetIcon as ProhibitInsetFillIcon } from "../fill/ProhibitInset";
import { ProhibitInsetIcon as ProhibitInsetLightIcon } from "../light/ProhibitInset";
import { ProhibitInsetIcon as ProhibitInsetRegularIcon } from "../regular/ProhibitInset";
import { ProhibitInsetIcon as ProhibitInsetThinIcon } from "../thin/ProhibitInset";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ProhibitInsetThinIcon,
	light: ProhibitInsetLightIcon,
	regular: ProhibitInsetRegularIcon,
	bold: ProhibitInsetBoldIcon,
	fill: ProhibitInsetFillIcon,
	duotone: ProhibitInsetDuotoneIcon,
} as const;

export function ProhibitInsetIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ProhibitInsetIcon as ProhibitInset };
