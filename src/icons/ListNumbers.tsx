import { ListNumbersIcon as ListNumbersBoldIcon } from "../bold/ListNumbers";
import { ListNumbersIcon as ListNumbersDuotoneIcon } from "../duotone/ListNumbers";
import { ListNumbersIcon as ListNumbersFillIcon } from "../fill/ListNumbers";
import { ListNumbersIcon as ListNumbersLightIcon } from "../light/ListNumbers";
import { ListNumbersIcon as ListNumbersRegularIcon } from "../regular/ListNumbers";
import { ListNumbersIcon as ListNumbersThinIcon } from "../thin/ListNumbers";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ListNumbersThinIcon,
	light: ListNumbersLightIcon,
	regular: ListNumbersRegularIcon,
	bold: ListNumbersBoldIcon,
	fill: ListNumbersFillIcon,
	duotone: ListNumbersDuotoneIcon,
} as const;

export function ListNumbersIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ListNumbersIcon as ListNumbers };
