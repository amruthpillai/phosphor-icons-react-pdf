import { AddressBookTabsIcon as AddressBookTabsBoldIcon } from "../bold/AddressBookTabs";
import { AddressBookTabsIcon as AddressBookTabsDuotoneIcon } from "../duotone/AddressBookTabs";
import { AddressBookTabsIcon as AddressBookTabsFillIcon } from "../fill/AddressBookTabs";
import { AddressBookTabsIcon as AddressBookTabsLightIcon } from "../light/AddressBookTabs";
import { AddressBookTabsIcon as AddressBookTabsRegularIcon } from "../regular/AddressBookTabs";
import { AddressBookTabsIcon as AddressBookTabsThinIcon } from "../thin/AddressBookTabs";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AddressBookTabsThinIcon,
	light: AddressBookTabsLightIcon,
	regular: AddressBookTabsRegularIcon,
	bold: AddressBookTabsBoldIcon,
	fill: AddressBookTabsFillIcon,
	duotone: AddressBookTabsDuotoneIcon,
} as const;

export function AddressBookTabsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AddressBookTabsIcon as AddressBookTabs };
