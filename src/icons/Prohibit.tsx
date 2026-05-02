import { ProhibitIcon as ProhibitBoldIcon } from "../bold/Prohibit";
import { ProhibitIcon as ProhibitDuotoneIcon } from "../duotone/Prohibit";
import { ProhibitIcon as ProhibitFillIcon } from "../fill/Prohibit";
import { ProhibitIcon as ProhibitLightIcon } from "../light/Prohibit";
import { ProhibitIcon as ProhibitRegularIcon } from "../regular/Prohibit";
import { ProhibitIcon as ProhibitThinIcon } from "../thin/Prohibit";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ProhibitThinIcon,
	light: ProhibitLightIcon,
	regular: ProhibitRegularIcon,
	bold: ProhibitBoldIcon,
	fill: ProhibitFillIcon,
	duotone: ProhibitDuotoneIcon,
} as const;

export function ProhibitIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ProhibitIcon as Prohibit };
