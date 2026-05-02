import { VolleyballIcon as VolleyballBoldIcon } from "../bold/Volleyball";
import { VolleyballIcon as VolleyballDuotoneIcon } from "../duotone/Volleyball";
import { VolleyballIcon as VolleyballFillIcon } from "../fill/Volleyball";
import { VolleyballIcon as VolleyballLightIcon } from "../light/Volleyball";
import { VolleyballIcon as VolleyballRegularIcon } from "../regular/Volleyball";
import { VolleyballIcon as VolleyballThinIcon } from "../thin/Volleyball";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: VolleyballThinIcon,
	light: VolleyballLightIcon,
	regular: VolleyballRegularIcon,
	bold: VolleyballBoldIcon,
	fill: VolleyballFillIcon,
	duotone: VolleyballDuotoneIcon,
} as const;

export function VolleyballIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { VolleyballIcon as Volleyball };
