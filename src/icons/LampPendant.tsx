import { LampPendantIcon as LampPendantBoldIcon } from "../bold/LampPendant";
import { LampPendantIcon as LampPendantDuotoneIcon } from "../duotone/LampPendant";
import { LampPendantIcon as LampPendantFillIcon } from "../fill/LampPendant";
import { LampPendantIcon as LampPendantLightIcon } from "../light/LampPendant";
import { LampPendantIcon as LampPendantRegularIcon } from "../regular/LampPendant";
import { LampPendantIcon as LampPendantThinIcon } from "../thin/LampPendant";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LampPendantThinIcon,
	light: LampPendantLightIcon,
	regular: LampPendantRegularIcon,
	bold: LampPendantBoldIcon,
	fill: LampPendantFillIcon,
	duotone: LampPendantDuotoneIcon,
} as const;

export function LampPendantIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LampPendantIcon as LampPendant };
