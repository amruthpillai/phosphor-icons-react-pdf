import { FolderMinusIcon as FolderMinusBoldIcon } from "../bold/FolderMinus";
import { FolderMinusIcon as FolderMinusDuotoneIcon } from "../duotone/FolderMinus";
import { FolderMinusIcon as FolderMinusFillIcon } from "../fill/FolderMinus";
import { FolderMinusIcon as FolderMinusLightIcon } from "../light/FolderMinus";
import { FolderMinusIcon as FolderMinusRegularIcon } from "../regular/FolderMinus";
import { FolderMinusIcon as FolderMinusThinIcon } from "../thin/FolderMinus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FolderMinusThinIcon,
	light: FolderMinusLightIcon,
	regular: FolderMinusRegularIcon,
	bold: FolderMinusBoldIcon,
	fill: FolderMinusFillIcon,
	duotone: FolderMinusDuotoneIcon,
} as const;

export function FolderMinusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FolderMinusIcon as FolderMinus };
