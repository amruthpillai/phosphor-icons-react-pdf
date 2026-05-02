import { MoneyIcon as MoneyBoldIcon } from "../bold/Money";
import { MoneyIcon as MoneyDuotoneIcon } from "../duotone/Money";
import { MoneyIcon as MoneyFillIcon } from "../fill/Money";
import { MoneyIcon as MoneyLightIcon } from "../light/Money";
import { MoneyIcon as MoneyRegularIcon } from "../regular/Money";
import { MoneyIcon as MoneyThinIcon } from "../thin/Money";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MoneyThinIcon,
	light: MoneyLightIcon,
	regular: MoneyRegularIcon,
	bold: MoneyBoldIcon,
	fill: MoneyFillIcon,
	duotone: MoneyDuotoneIcon,
} as const;

export function MoneyIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MoneyIcon as Money };
