import { WindmillIcon as WindmillBoldIcon } from "../bold/Windmill";
import { WindmillIcon as WindmillDuotoneIcon } from "../duotone/Windmill";
import { WindmillIcon as WindmillFillIcon } from "../fill/Windmill";
import { WindmillIcon as WindmillLightIcon } from "../light/Windmill";
import { WindmillIcon as WindmillRegularIcon } from "../regular/Windmill";
import { WindmillIcon as WindmillThinIcon } from "../thin/Windmill";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WindmillThinIcon,
	light: WindmillLightIcon,
	regular: WindmillRegularIcon,
	bold: WindmillBoldIcon,
	fill: WindmillFillIcon,
	duotone: WindmillDuotoneIcon,
} as const;

export function WindmillIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WindmillIcon as Windmill };
