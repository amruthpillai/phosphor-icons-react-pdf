import { CellSignalHighIcon as CellSignalHighBoldIcon } from "../bold/CellSignalHigh";
import { CellSignalHighIcon as CellSignalHighDuotoneIcon } from "../duotone/CellSignalHigh";
import { CellSignalHighIcon as CellSignalHighFillIcon } from "../fill/CellSignalHigh";
import { CellSignalHighIcon as CellSignalHighLightIcon } from "../light/CellSignalHigh";
import { CellSignalHighIcon as CellSignalHighRegularIcon } from "../regular/CellSignalHigh";
import { CellSignalHighIcon as CellSignalHighThinIcon } from "../thin/CellSignalHigh";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CellSignalHighThinIcon,
	light: CellSignalHighLightIcon,
	regular: CellSignalHighRegularIcon,
	bold: CellSignalHighBoldIcon,
	fill: CellSignalHighFillIcon,
	duotone: CellSignalHighDuotoneIcon,
} as const;

export function CellSignalHighIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CellSignalHighIcon as CellSignalHigh };
