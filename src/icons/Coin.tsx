import { CoinIcon as CoinBoldIcon } from "../bold/Coin";
import { CoinIcon as CoinDuotoneIcon } from "../duotone/Coin";
import { CoinIcon as CoinFillIcon } from "../fill/Coin";
import { CoinIcon as CoinLightIcon } from "../light/Coin";
import { CoinIcon as CoinRegularIcon } from "../regular/Coin";
import { CoinIcon as CoinThinIcon } from "../thin/Coin";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CoinThinIcon,
	light: CoinLightIcon,
	regular: CoinRegularIcon,
	bold: CoinBoldIcon,
	fill: CoinFillIcon,
	duotone: CoinDuotoneIcon,
} as const;

export function CoinIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CoinIcon as Coin };
