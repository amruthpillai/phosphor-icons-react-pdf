import { HandCoinsIcon as HandCoinsBoldIcon } from "../bold/HandCoins";
import { HandCoinsIcon as HandCoinsDuotoneIcon } from "../duotone/HandCoins";
import { HandCoinsIcon as HandCoinsFillIcon } from "../fill/HandCoins";
import { HandCoinsIcon as HandCoinsLightIcon } from "../light/HandCoins";
import { HandCoinsIcon as HandCoinsRegularIcon } from "../regular/HandCoins";
import { HandCoinsIcon as HandCoinsThinIcon } from "../thin/HandCoins";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HandCoinsThinIcon,
	light: HandCoinsLightIcon,
	regular: HandCoinsRegularIcon,
	bold: HandCoinsBoldIcon,
	fill: HandCoinsFillIcon,
	duotone: HandCoinsDuotoneIcon,
} as const;

export function HandCoinsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HandCoinsIcon as HandCoins };
