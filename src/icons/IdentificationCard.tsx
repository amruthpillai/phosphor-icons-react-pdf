import { IdentificationCardIcon as IdentificationCardBoldIcon } from "../bold/IdentificationCard";
import { IdentificationCardIcon as IdentificationCardDuotoneIcon } from "../duotone/IdentificationCard";
import { IdentificationCardIcon as IdentificationCardFillIcon } from "../fill/IdentificationCard";
import { IdentificationCardIcon as IdentificationCardLightIcon } from "../light/IdentificationCard";
import { IdentificationCardIcon as IdentificationCardRegularIcon } from "../regular/IdentificationCard";
import { IdentificationCardIcon as IdentificationCardThinIcon } from "../thin/IdentificationCard";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: IdentificationCardThinIcon,
	light: IdentificationCardLightIcon,
	regular: IdentificationCardRegularIcon,
	bold: IdentificationCardBoldIcon,
	fill: IdentificationCardFillIcon,
	duotone: IdentificationCardDuotoneIcon,
} as const;

export function IdentificationCardIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { IdentificationCardIcon as IdentificationCard };
