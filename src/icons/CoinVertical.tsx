import { CoinVerticalIcon as CoinVerticalBoldIcon } from "../bold/CoinVertical";
import { CoinVerticalIcon as CoinVerticalDuotoneIcon } from "../duotone/CoinVertical";
import { CoinVerticalIcon as CoinVerticalFillIcon } from "../fill/CoinVertical";
import { CoinVerticalIcon as CoinVerticalLightIcon } from "../light/CoinVertical";
import { CoinVerticalIcon as CoinVerticalRegularIcon } from "../regular/CoinVertical";
import { CoinVerticalIcon as CoinVerticalThinIcon } from "../thin/CoinVertical";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CoinVerticalThinIcon,
	light: CoinVerticalLightIcon,
	regular: CoinVerticalRegularIcon,
	bold: CoinVerticalBoldIcon,
	fill: CoinVerticalFillIcon,
	duotone: CoinVerticalDuotoneIcon,
} as const;

export function CoinVerticalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CoinVerticalIcon as CoinVertical };
