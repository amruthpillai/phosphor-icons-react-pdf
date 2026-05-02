import { StorefrontIcon as StorefrontBoldIcon } from "../bold/Storefront";
import { StorefrontIcon as StorefrontDuotoneIcon } from "../duotone/Storefront";
import { StorefrontIcon as StorefrontFillIcon } from "../fill/Storefront";
import { StorefrontIcon as StorefrontLightIcon } from "../light/Storefront";
import { StorefrontIcon as StorefrontRegularIcon } from "../regular/Storefront";
import { StorefrontIcon as StorefrontThinIcon } from "../thin/Storefront";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: StorefrontThinIcon,
	light: StorefrontLightIcon,
	regular: StorefrontRegularIcon,
	bold: StorefrontBoldIcon,
	fill: StorefrontFillIcon,
	duotone: StorefrontDuotoneIcon,
} as const;

export function StorefrontIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { StorefrontIcon as Storefront };
