import { CherriesIcon as CherriesBoldIcon } from "../bold/Cherries";
import { CherriesIcon as CherriesDuotoneIcon } from "../duotone/Cherries";
import { CherriesIcon as CherriesFillIcon } from "../fill/Cherries";
import { CherriesIcon as CherriesLightIcon } from "../light/Cherries";
import { CherriesIcon as CherriesRegularIcon } from "../regular/Cherries";
import { CherriesIcon as CherriesThinIcon } from "../thin/Cherries";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CherriesThinIcon,
	light: CherriesLightIcon,
	regular: CherriesRegularIcon,
	bold: CherriesBoldIcon,
	fill: CherriesFillIcon,
	duotone: CherriesDuotoneIcon,
} as const;

export function CherriesIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CherriesIcon as Cherries };
