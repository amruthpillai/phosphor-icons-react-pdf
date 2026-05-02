import { EscalatorDownIcon as EscalatorDownBoldIcon } from "../bold/EscalatorDown";
import { EscalatorDownIcon as EscalatorDownDuotoneIcon } from "../duotone/EscalatorDown";
import { EscalatorDownIcon as EscalatorDownFillIcon } from "../fill/EscalatorDown";
import { EscalatorDownIcon as EscalatorDownLightIcon } from "../light/EscalatorDown";
import { EscalatorDownIcon as EscalatorDownRegularIcon } from "../regular/EscalatorDown";
import { EscalatorDownIcon as EscalatorDownThinIcon } from "../thin/EscalatorDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EscalatorDownThinIcon,
	light: EscalatorDownLightIcon,
	regular: EscalatorDownRegularIcon,
	bold: EscalatorDownBoldIcon,
	fill: EscalatorDownFillIcon,
	duotone: EscalatorDownDuotoneIcon,
} as const;

export function EscalatorDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EscalatorDownIcon as EscalatorDown };
