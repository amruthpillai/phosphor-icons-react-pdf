import { SupersetOfIcon as SupersetOfBoldIcon } from "../bold/SupersetOf";
import { SupersetOfIcon as SupersetOfDuotoneIcon } from "../duotone/SupersetOf";
import { SupersetOfIcon as SupersetOfFillIcon } from "../fill/SupersetOf";
import { SupersetOfIcon as SupersetOfLightIcon } from "../light/SupersetOf";
import { SupersetOfIcon as SupersetOfRegularIcon } from "../regular/SupersetOf";
import { SupersetOfIcon as SupersetOfThinIcon } from "../thin/SupersetOf";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SupersetOfThinIcon,
	light: SupersetOfLightIcon,
	regular: SupersetOfRegularIcon,
	bold: SupersetOfBoldIcon,
	fill: SupersetOfFillIcon,
	duotone: SupersetOfDuotoneIcon,
} as const;

export function SupersetOfIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SupersetOfIcon as SupersetOf };
