import { PersonIcon as PersonBoldIcon } from "../bold/Person";
import { PersonIcon as PersonDuotoneIcon } from "../duotone/Person";
import { PersonIcon as PersonFillIcon } from "../fill/Person";
import { PersonIcon as PersonLightIcon } from "../light/Person";
import { PersonIcon as PersonRegularIcon } from "../regular/Person";
import { PersonIcon as PersonThinIcon } from "../thin/Person";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PersonThinIcon,
	light: PersonLightIcon,
	regular: PersonRegularIcon,
	bold: PersonBoldIcon,
	fill: PersonFillIcon,
	duotone: PersonDuotoneIcon,
} as const;

export function PersonIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PersonIcon as Person };
