import { SpinnerIcon as SpinnerBoldIcon } from "../bold/Spinner";
import { SpinnerIcon as SpinnerDuotoneIcon } from "../duotone/Spinner";
import { SpinnerIcon as SpinnerFillIcon } from "../fill/Spinner";
import { SpinnerIcon as SpinnerLightIcon } from "../light/Spinner";
import { SpinnerIcon as SpinnerRegularIcon } from "../regular/Spinner";
import { SpinnerIcon as SpinnerThinIcon } from "../thin/Spinner";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SpinnerThinIcon,
	light: SpinnerLightIcon,
	regular: SpinnerRegularIcon,
	bold: SpinnerBoldIcon,
	fill: SpinnerFillIcon,
	duotone: SpinnerDuotoneIcon,
} as const;

export function SpinnerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SpinnerIcon as Spinner };
