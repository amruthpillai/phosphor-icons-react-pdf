import { CardsIcon as CardsBoldIcon } from "../bold/Cards";
import { CardsIcon as CardsDuotoneIcon } from "../duotone/Cards";
import { CardsIcon as CardsFillIcon } from "../fill/Cards";
import { CardsIcon as CardsLightIcon } from "../light/Cards";
import { CardsIcon as CardsRegularIcon } from "../regular/Cards";
import { CardsIcon as CardsThinIcon } from "../thin/Cards";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CardsThinIcon,
	light: CardsLightIcon,
	regular: CardsRegularIcon,
	bold: CardsBoldIcon,
	fill: CardsFillIcon,
	duotone: CardsDuotoneIcon,
} as const;

export function CardsIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CardsIcon as Cards };
