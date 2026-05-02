import { CurrencyRubIcon as CurrencyRubBoldIcon } from "../bold/CurrencyRub";
import { CurrencyRubIcon as CurrencyRubDuotoneIcon } from "../duotone/CurrencyRub";
import { CurrencyRubIcon as CurrencyRubFillIcon } from "../fill/CurrencyRub";
import { CurrencyRubIcon as CurrencyRubLightIcon } from "../light/CurrencyRub";
import { CurrencyRubIcon as CurrencyRubRegularIcon } from "../regular/CurrencyRub";
import { CurrencyRubIcon as CurrencyRubThinIcon } from "../thin/CurrencyRub";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CurrencyRubThinIcon,
	light: CurrencyRubLightIcon,
	regular: CurrencyRubRegularIcon,
	bold: CurrencyRubBoldIcon,
	fill: CurrencyRubFillIcon,
	duotone: CurrencyRubDuotoneIcon,
} as const;

export function CurrencyRubIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CurrencyRubIcon as CurrencyRub };
