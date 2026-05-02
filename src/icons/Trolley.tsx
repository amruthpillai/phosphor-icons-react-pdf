import { TrolleyIcon as TrolleyBoldIcon } from "../bold/Trolley";
import { TrolleyIcon as TrolleyDuotoneIcon } from "../duotone/Trolley";
import { TrolleyIcon as TrolleyFillIcon } from "../fill/Trolley";
import { TrolleyIcon as TrolleyLightIcon } from "../light/Trolley";
import { TrolleyIcon as TrolleyRegularIcon } from "../regular/Trolley";
import { TrolleyIcon as TrolleyThinIcon } from "../thin/Trolley";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TrolleyThinIcon,
	light: TrolleyLightIcon,
	regular: TrolleyRegularIcon,
	bold: TrolleyBoldIcon,
	fill: TrolleyFillIcon,
	duotone: TrolleyDuotoneIcon,
} as const;

export function TrolleyIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TrolleyIcon as Trolley };
