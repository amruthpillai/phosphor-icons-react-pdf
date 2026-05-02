import { FolderSimpleMinusIcon as FolderSimpleMinusBoldIcon } from "../bold/FolderSimpleMinus";
import { FolderSimpleMinusIcon as FolderSimpleMinusDuotoneIcon } from "../duotone/FolderSimpleMinus";
import { FolderSimpleMinusIcon as FolderSimpleMinusFillIcon } from "../fill/FolderSimpleMinus";
import { FolderSimpleMinusIcon as FolderSimpleMinusLightIcon } from "../light/FolderSimpleMinus";
import { FolderSimpleMinusIcon as FolderSimpleMinusRegularIcon } from "../regular/FolderSimpleMinus";
import { FolderSimpleMinusIcon as FolderSimpleMinusThinIcon } from "../thin/FolderSimpleMinus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FolderSimpleMinusThinIcon,
	light: FolderSimpleMinusLightIcon,
	regular: FolderSimpleMinusRegularIcon,
	bold: FolderSimpleMinusBoldIcon,
	fill: FolderSimpleMinusFillIcon,
	duotone: FolderSimpleMinusDuotoneIcon,
} as const;

export function FolderSimpleMinusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FolderSimpleMinusIcon as FolderSimpleMinus };
