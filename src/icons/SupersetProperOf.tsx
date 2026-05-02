import { SupersetProperOfIcon as SupersetProperOfBoldIcon } from "../bold/SupersetProperOf";
import { SupersetProperOfIcon as SupersetProperOfDuotoneIcon } from "../duotone/SupersetProperOf";
import { SupersetProperOfIcon as SupersetProperOfFillIcon } from "../fill/SupersetProperOf";
import { SupersetProperOfIcon as SupersetProperOfLightIcon } from "../light/SupersetProperOf";
import { SupersetProperOfIcon as SupersetProperOfRegularIcon } from "../regular/SupersetProperOf";
import { SupersetProperOfIcon as SupersetProperOfThinIcon } from "../thin/SupersetProperOf";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SupersetProperOfThinIcon,
	light: SupersetProperOfLightIcon,
	regular: SupersetProperOfRegularIcon,
	bold: SupersetProperOfBoldIcon,
	fill: SupersetProperOfFillIcon,
	duotone: SupersetProperOfDuotoneIcon,
} as const;

export function SupersetProperOfIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SupersetProperOfIcon as SupersetProperOf };
