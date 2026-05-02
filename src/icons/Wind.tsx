import { WindIcon as WindBoldIcon } from "../bold/Wind";
import { WindIcon as WindDuotoneIcon } from "../duotone/Wind";
import { WindIcon as WindFillIcon } from "../fill/Wind";
import { WindIcon as WindLightIcon } from "../light/Wind";
import { WindIcon as WindRegularIcon } from "../regular/Wind";
import { WindIcon as WindThinIcon } from "../thin/Wind";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WindThinIcon,
	light: WindLightIcon,
	regular: WindRegularIcon,
	bold: WindBoldIcon,
	fill: WindFillIcon,
	duotone: WindDuotoneIcon,
} as const;

export function WindIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WindIcon as Wind };
