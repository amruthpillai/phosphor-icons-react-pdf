import { CellSignalNoneIcon as CellSignalNoneBoldIcon } from "../bold/CellSignalNone";
import { CellSignalNoneIcon as CellSignalNoneDuotoneIcon } from "../duotone/CellSignalNone";
import { CellSignalNoneIcon as CellSignalNoneFillIcon } from "../fill/CellSignalNone";
import { CellSignalNoneIcon as CellSignalNoneLightIcon } from "../light/CellSignalNone";
import { CellSignalNoneIcon as CellSignalNoneRegularIcon } from "../regular/CellSignalNone";
import { CellSignalNoneIcon as CellSignalNoneThinIcon } from "../thin/CellSignalNone";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CellSignalNoneThinIcon,
	light: CellSignalNoneLightIcon,
	regular: CellSignalNoneRegularIcon,
	bold: CellSignalNoneBoldIcon,
	fill: CellSignalNoneFillIcon,
	duotone: CellSignalNoneDuotoneIcon,
} as const;

export function CellSignalNoneIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CellSignalNoneIcon as CellSignalNone };
