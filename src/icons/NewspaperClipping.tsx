import { NewspaperClippingIcon as NewspaperClippingBoldIcon } from "../bold/NewspaperClipping";
import { NewspaperClippingIcon as NewspaperClippingDuotoneIcon } from "../duotone/NewspaperClipping";
import { NewspaperClippingIcon as NewspaperClippingFillIcon } from "../fill/NewspaperClipping";
import { NewspaperClippingIcon as NewspaperClippingLightIcon } from "../light/NewspaperClipping";
import { NewspaperClippingIcon as NewspaperClippingRegularIcon } from "../regular/NewspaperClipping";
import { NewspaperClippingIcon as NewspaperClippingThinIcon } from "../thin/NewspaperClipping";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NewspaperClippingThinIcon,
	light: NewspaperClippingLightIcon,
	regular: NewspaperClippingRegularIcon,
	bold: NewspaperClippingBoldIcon,
	fill: NewspaperClippingFillIcon,
	duotone: NewspaperClippingDuotoneIcon,
} as const;

export function NewspaperClippingIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NewspaperClippingIcon as NewspaperClipping };
