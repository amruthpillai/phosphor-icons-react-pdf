import { DatabaseIcon as DatabaseBoldIcon } from "../bold/Database";
import { DatabaseIcon as DatabaseDuotoneIcon } from "../duotone/Database";
import { DatabaseIcon as DatabaseFillIcon } from "../fill/Database";
import { DatabaseIcon as DatabaseLightIcon } from "../light/Database";
import { DatabaseIcon as DatabaseRegularIcon } from "../regular/Database";
import { DatabaseIcon as DatabaseThinIcon } from "../thin/Database";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DatabaseThinIcon,
	light: DatabaseLightIcon,
	regular: DatabaseRegularIcon,
	bold: DatabaseBoldIcon,
	fill: DatabaseFillIcon,
	duotone: DatabaseDuotoneIcon,
} as const;

export function DatabaseIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DatabaseIcon as Database };
