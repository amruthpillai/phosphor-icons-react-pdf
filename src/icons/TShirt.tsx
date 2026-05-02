import { TShirtIcon as TShirtBoldIcon } from "../bold/TShirt";
import { TShirtIcon as TShirtDuotoneIcon } from "../duotone/TShirt";
import { TShirtIcon as TShirtFillIcon } from "../fill/TShirt";
import { TShirtIcon as TShirtLightIcon } from "../light/TShirt";
import { TShirtIcon as TShirtRegularIcon } from "../regular/TShirt";
import { TShirtIcon as TShirtThinIcon } from "../thin/TShirt";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TShirtThinIcon,
	light: TShirtLightIcon,
	regular: TShirtRegularIcon,
	bold: TShirtBoldIcon,
	fill: TShirtFillIcon,
	duotone: TShirtDuotoneIcon,
} as const;

export function TShirtIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TShirtIcon as TShirt };
