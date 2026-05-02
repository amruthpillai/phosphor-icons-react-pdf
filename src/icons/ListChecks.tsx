import { ListChecksIcon as ListChecksBoldIcon } from "../bold/ListChecks";
import { ListChecksIcon as ListChecksDuotoneIcon } from "../duotone/ListChecks";
import { ListChecksIcon as ListChecksFillIcon } from "../fill/ListChecks";
import { ListChecksIcon as ListChecksLightIcon } from "../light/ListChecks";
import { ListChecksIcon as ListChecksRegularIcon } from "../regular/ListChecks";
import { ListChecksIcon as ListChecksThinIcon } from "../thin/ListChecks";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ListChecksThinIcon,
	light: ListChecksLightIcon,
	regular: ListChecksRegularIcon,
	bold: ListChecksBoldIcon,
	fill: ListChecksFillIcon,
	duotone: ListChecksDuotoneIcon,
} as const;

export function ListChecksIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ListChecksIcon as ListChecks };
