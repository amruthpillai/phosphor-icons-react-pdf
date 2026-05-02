import { RankingIcon as RankingBoldIcon } from "../bold/Ranking";
import { RankingIcon as RankingDuotoneIcon } from "../duotone/Ranking";
import { RankingIcon as RankingFillIcon } from "../fill/Ranking";
import { RankingIcon as RankingLightIcon } from "../light/Ranking";
import { RankingIcon as RankingRegularIcon } from "../regular/Ranking";
import { RankingIcon as RankingThinIcon } from "../thin/Ranking";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RankingThinIcon,
	light: RankingLightIcon,
	regular: RankingRegularIcon,
	bold: RankingBoldIcon,
	fill: RankingFillIcon,
	duotone: RankingDuotoneIcon,
} as const;

export function RankingIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RankingIcon as Ranking };
