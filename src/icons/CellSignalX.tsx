import { CellSignalXIcon as CellSignalXBoldIcon } from "../bold/CellSignalX";
import { CellSignalXIcon as CellSignalXDuotoneIcon } from "../duotone/CellSignalX";
import { CellSignalXIcon as CellSignalXFillIcon } from "../fill/CellSignalX";
import { CellSignalXIcon as CellSignalXLightIcon } from "../light/CellSignalX";
import { CellSignalXIcon as CellSignalXRegularIcon } from "../regular/CellSignalX";
import { CellSignalXIcon as CellSignalXThinIcon } from "../thin/CellSignalX";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CellSignalXThinIcon,
	light: CellSignalXLightIcon,
	regular: CellSignalXRegularIcon,
	bold: CellSignalXBoldIcon,
	fill: CellSignalXFillIcon,
	duotone: CellSignalXDuotoneIcon,
} as const;

export function CellSignalXIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CellSignalXIcon as CellSignalX };
