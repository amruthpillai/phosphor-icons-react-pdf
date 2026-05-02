import { SimCardIcon as SimCardBoldIcon } from "../bold/SimCard";
import { SimCardIcon as SimCardDuotoneIcon } from "../duotone/SimCard";
import { SimCardIcon as SimCardFillIcon } from "../fill/SimCard";
import { SimCardIcon as SimCardLightIcon } from "../light/SimCard";
import { SimCardIcon as SimCardRegularIcon } from "../regular/SimCard";
import { SimCardIcon as SimCardThinIcon } from "../thin/SimCard";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SimCardThinIcon,
	light: SimCardLightIcon,
	regular: SimCardRegularIcon,
	bold: SimCardBoldIcon,
	fill: SimCardFillIcon,
	duotone: SimCardDuotoneIcon,
} as const;

export function SimCardIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SimCardIcon as SimCard };
