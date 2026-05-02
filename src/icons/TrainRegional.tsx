import { TrainRegionalIcon as TrainRegionalBoldIcon } from "../bold/TrainRegional";
import { TrainRegionalIcon as TrainRegionalDuotoneIcon } from "../duotone/TrainRegional";
import { TrainRegionalIcon as TrainRegionalFillIcon } from "../fill/TrainRegional";
import { TrainRegionalIcon as TrainRegionalLightIcon } from "../light/TrainRegional";
import { TrainRegionalIcon as TrainRegionalRegularIcon } from "../regular/TrainRegional";
import { TrainRegionalIcon as TrainRegionalThinIcon } from "../thin/TrainRegional";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TrainRegionalThinIcon,
	light: TrainRegionalLightIcon,
	regular: TrainRegionalRegularIcon,
	bold: TrainRegionalBoldIcon,
	fill: TrainRegionalFillIcon,
	duotone: TrainRegionalDuotoneIcon,
} as const;

export function TrainRegionalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TrainRegionalIcon as TrainRegional };
