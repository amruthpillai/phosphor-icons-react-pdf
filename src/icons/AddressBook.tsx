import { AddressBookIcon as AddressBookBoldIcon } from "../bold/AddressBook";
import { AddressBookIcon as AddressBookDuotoneIcon } from "../duotone/AddressBook";
import { AddressBookIcon as AddressBookFillIcon } from "../fill/AddressBook";
import { AddressBookIcon as AddressBookLightIcon } from "../light/AddressBook";
import { AddressBookIcon as AddressBookRegularIcon } from "../regular/AddressBook";
import { AddressBookIcon as AddressBookThinIcon } from "../thin/AddressBook";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AddressBookThinIcon,
	light: AddressBookLightIcon,
	regular: AddressBookRegularIcon,
	bold: AddressBookBoldIcon,
	fill: AddressBookFillIcon,
	duotone: AddressBookDuotoneIcon,
} as const;

export function AddressBookIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AddressBookIcon as AddressBook };
