import { CheersIcon as CheersBoldIcon } from "../bold/Cheers";
import { CheersIcon as CheersDuotoneIcon } from "../duotone/Cheers";
import { CheersIcon as CheersFillIcon } from "../fill/Cheers";
import { CheersIcon as CheersLightIcon } from "../light/Cheers";
import { CheersIcon as CheersRegularIcon } from "../regular/Cheers";
import { CheersIcon as CheersThinIcon } from "../thin/Cheers";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CheersThinIcon,
	light: CheersLightIcon,
	regular: CheersRegularIcon,
	bold: CheersBoldIcon,
	fill: CheersFillIcon,
	duotone: CheersDuotoneIcon,
} as const;

export function CheersIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CheersIcon as Cheers };
