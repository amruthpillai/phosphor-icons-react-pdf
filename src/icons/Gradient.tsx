import { GradientIcon as GradientBoldIcon } from "../bold/Gradient";
import { GradientIcon as GradientDuotoneIcon } from "../duotone/Gradient";
import { GradientIcon as GradientFillIcon } from "../fill/Gradient";
import { GradientIcon as GradientLightIcon } from "../light/Gradient";
import { GradientIcon as GradientRegularIcon } from "../regular/Gradient";
import { GradientIcon as GradientThinIcon } from "../thin/Gradient";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GradientThinIcon,
	light: GradientLightIcon,
	regular: GradientRegularIcon,
	bold: GradientBoldIcon,
	fill: GradientFillIcon,
	duotone: GradientDuotoneIcon,
} as const;

export function GradientIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GradientIcon as Gradient };
