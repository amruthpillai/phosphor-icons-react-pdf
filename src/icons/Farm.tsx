import { FarmIcon as FarmBoldIcon } from "../bold/Farm";
import { FarmIcon as FarmDuotoneIcon } from "../duotone/Farm";
import { FarmIcon as FarmFillIcon } from "../fill/Farm";
import { FarmIcon as FarmLightIcon } from "../light/Farm";
import { FarmIcon as FarmRegularIcon } from "../regular/Farm";
import { FarmIcon as FarmThinIcon } from "../thin/Farm";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FarmThinIcon,
	light: FarmLightIcon,
	regular: FarmRegularIcon,
	bold: FarmBoldIcon,
	fill: FarmFillIcon,
	duotone: FarmDuotoneIcon,
} as const;

export function FarmIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FarmIcon as Farm };
