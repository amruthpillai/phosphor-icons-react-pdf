import { PhoneListIcon as PhoneListBoldIcon } from "../bold/PhoneList";
import { PhoneListIcon as PhoneListDuotoneIcon } from "../duotone/PhoneList";
import { PhoneListIcon as PhoneListFillIcon } from "../fill/PhoneList";
import { PhoneListIcon as PhoneListLightIcon } from "../light/PhoneList";
import { PhoneListIcon as PhoneListRegularIcon } from "../regular/PhoneList";
import { PhoneListIcon as PhoneListThinIcon } from "../thin/PhoneList";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PhoneListThinIcon,
	light: PhoneListLightIcon,
	regular: PhoneListRegularIcon,
	bold: PhoneListBoldIcon,
	fill: PhoneListFillIcon,
	duotone: PhoneListDuotoneIcon,
} as const;

export function PhoneListIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PhoneListIcon as PhoneList };
