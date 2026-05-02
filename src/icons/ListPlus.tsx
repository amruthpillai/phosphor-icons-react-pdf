import { ListPlusIcon as ListPlusBoldIcon } from "../bold/ListPlus";
import { ListPlusIcon as ListPlusDuotoneIcon } from "../duotone/ListPlus";
import { ListPlusIcon as ListPlusFillIcon } from "../fill/ListPlus";
import { ListPlusIcon as ListPlusLightIcon } from "../light/ListPlus";
import { ListPlusIcon as ListPlusRegularIcon } from "../regular/ListPlus";
import { ListPlusIcon as ListPlusThinIcon } from "../thin/ListPlus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ListPlusThinIcon,
	light: ListPlusLightIcon,
	regular: ListPlusRegularIcon,
	bold: ListPlusBoldIcon,
	fill: ListPlusFillIcon,
	duotone: ListPlusDuotoneIcon,
} as const;

export function ListPlusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ListPlusIcon as ListPlus };
