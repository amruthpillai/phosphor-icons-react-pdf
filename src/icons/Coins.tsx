import { CoinsIcon as CoinsBoldIcon } from "../bold/Coins";
import { CoinsIcon as CoinsDuotoneIcon } from "../duotone/Coins";
import { CoinsIcon as CoinsFillIcon } from "../fill/Coins";
import { CoinsIcon as CoinsLightIcon } from "../light/Coins";
import { CoinsIcon as CoinsRegularIcon } from "../regular/Coins";
import { CoinsIcon as CoinsThinIcon } from "../thin/Coins";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CoinsThinIcon,
	light: CoinsLightIcon,
	regular: CoinsRegularIcon,
	bold: CoinsBoldIcon,
	fill: CoinsFillIcon,
	duotone: CoinsDuotoneIcon,
} as const;

export function CoinsIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CoinsIcon as Coins };
