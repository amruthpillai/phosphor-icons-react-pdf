import { CloverIcon as CloverBoldIcon } from "../bold/Clover";
import { CloverIcon as CloverDuotoneIcon } from "../duotone/Clover";
import { CloverIcon as CloverFillIcon } from "../fill/Clover";
import { CloverIcon as CloverLightIcon } from "../light/Clover";
import { CloverIcon as CloverRegularIcon } from "../regular/Clover";
import { CloverIcon as CloverThinIcon } from "../thin/Clover";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CloverThinIcon,
	light: CloverLightIcon,
	regular: CloverRegularIcon,
	bold: CloverBoldIcon,
	fill: CloverFillIcon,
	duotone: CloverDuotoneIcon,
} as const;

export function CloverIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CloverIcon as Clover };
