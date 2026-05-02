import { CellSignalLowIcon as CellSignalLowBoldIcon } from "../bold/CellSignalLow";
import { CellSignalLowIcon as CellSignalLowDuotoneIcon } from "../duotone/CellSignalLow";
import { CellSignalLowIcon as CellSignalLowFillIcon } from "../fill/CellSignalLow";
import { CellSignalLowIcon as CellSignalLowLightIcon } from "../light/CellSignalLow";
import { CellSignalLowIcon as CellSignalLowRegularIcon } from "../regular/CellSignalLow";
import { CellSignalLowIcon as CellSignalLowThinIcon } from "../thin/CellSignalLow";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CellSignalLowThinIcon,
	light: CellSignalLowLightIcon,
	regular: CellSignalLowRegularIcon,
	bold: CellSignalLowBoldIcon,
	fill: CellSignalLowFillIcon,
	duotone: CellSignalLowDuotoneIcon,
} as const;

export function CellSignalLowIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CellSignalLowIcon as CellSignalLow };
