import { ListIcon as ListBoldIcon } from "../bold/List";
import { ListIcon as ListDuotoneIcon } from "../duotone/List";
import { ListIcon as ListFillIcon } from "../fill/List";
import { ListIcon as ListLightIcon } from "../light/List";
import { ListIcon as ListRegularIcon } from "../regular/List";
import { ListIcon as ListThinIcon } from "../thin/List";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ListThinIcon,
	light: ListLightIcon,
	regular: ListRegularIcon,
	bold: ListBoldIcon,
	fill: ListFillIcon,
	duotone: ListDuotoneIcon,
} as const;

export function ListIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ListIcon as List };
