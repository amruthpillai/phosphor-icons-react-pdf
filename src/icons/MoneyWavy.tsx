import { MoneyWavyIcon as MoneyWavyBoldIcon } from "../bold/MoneyWavy";
import { MoneyWavyIcon as MoneyWavyDuotoneIcon } from "../duotone/MoneyWavy";
import { MoneyWavyIcon as MoneyWavyFillIcon } from "../fill/MoneyWavy";
import { MoneyWavyIcon as MoneyWavyLightIcon } from "../light/MoneyWavy";
import { MoneyWavyIcon as MoneyWavyRegularIcon } from "../regular/MoneyWavy";
import { MoneyWavyIcon as MoneyWavyThinIcon } from "../thin/MoneyWavy";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MoneyWavyThinIcon,
	light: MoneyWavyLightIcon,
	regular: MoneyWavyRegularIcon,
	bold: MoneyWavyBoldIcon,
	fill: MoneyWavyFillIcon,
	duotone: MoneyWavyDuotoneIcon,
} as const;

export function MoneyWavyIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MoneyWavyIcon as MoneyWavy };
