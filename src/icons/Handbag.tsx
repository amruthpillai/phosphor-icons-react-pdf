import { HandbagIcon as HandbagBoldIcon } from "../bold/Handbag";
import { HandbagIcon as HandbagDuotoneIcon } from "../duotone/Handbag";
import { HandbagIcon as HandbagFillIcon } from "../fill/Handbag";
import { HandbagIcon as HandbagLightIcon } from "../light/Handbag";
import { HandbagIcon as HandbagRegularIcon } from "../regular/Handbag";
import { HandbagIcon as HandbagThinIcon } from "../thin/Handbag";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HandbagThinIcon,
	light: HandbagLightIcon,
	regular: HandbagRegularIcon,
	bold: HandbagBoldIcon,
	fill: HandbagFillIcon,
	duotone: HandbagDuotoneIcon,
} as const;

export function HandbagIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HandbagIcon as Handbag };
