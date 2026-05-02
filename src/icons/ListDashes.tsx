import { ListDashesIcon as ListDashesBoldIcon } from "../bold/ListDashes";
import { ListDashesIcon as ListDashesDuotoneIcon } from "../duotone/ListDashes";
import { ListDashesIcon as ListDashesFillIcon } from "../fill/ListDashes";
import { ListDashesIcon as ListDashesLightIcon } from "../light/ListDashes";
import { ListDashesIcon as ListDashesRegularIcon } from "../regular/ListDashes";
import { ListDashesIcon as ListDashesThinIcon } from "../thin/ListDashes";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ListDashesThinIcon,
	light: ListDashesLightIcon,
	regular: ListDashesRegularIcon,
	bold: ListDashesBoldIcon,
	fill: ListDashesFillIcon,
	duotone: ListDashesDuotoneIcon,
} as const;

export function ListDashesIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ListDashesIcon as ListDashes };
