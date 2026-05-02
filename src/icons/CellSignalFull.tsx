import { CellSignalFullIcon as CellSignalFullBoldIcon } from "../bold/CellSignalFull";
import { CellSignalFullIcon as CellSignalFullDuotoneIcon } from "../duotone/CellSignalFull";
import { CellSignalFullIcon as CellSignalFullFillIcon } from "../fill/CellSignalFull";
import { CellSignalFullIcon as CellSignalFullLightIcon } from "../light/CellSignalFull";
import { CellSignalFullIcon as CellSignalFullRegularIcon } from "../regular/CellSignalFull";
import { CellSignalFullIcon as CellSignalFullThinIcon } from "../thin/CellSignalFull";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CellSignalFullThinIcon,
	light: CellSignalFullLightIcon,
	regular: CellSignalFullRegularIcon,
	bold: CellSignalFullBoldIcon,
	fill: CellSignalFullFillIcon,
	duotone: CellSignalFullDuotoneIcon,
} as const;

export function CellSignalFullIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CellSignalFullIcon as CellSignalFull };
