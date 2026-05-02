import { CellSignalMediumIcon as CellSignalMediumBoldIcon } from "../bold/CellSignalMedium";
import { CellSignalMediumIcon as CellSignalMediumDuotoneIcon } from "../duotone/CellSignalMedium";
import { CellSignalMediumIcon as CellSignalMediumFillIcon } from "../fill/CellSignalMedium";
import { CellSignalMediumIcon as CellSignalMediumLightIcon } from "../light/CellSignalMedium";
import { CellSignalMediumIcon as CellSignalMediumRegularIcon } from "../regular/CellSignalMedium";
import { CellSignalMediumIcon as CellSignalMediumThinIcon } from "../thin/CellSignalMedium";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CellSignalMediumThinIcon,
	light: CellSignalMediumLightIcon,
	regular: CellSignalMediumRegularIcon,
	bold: CellSignalMediumBoldIcon,
	fill: CellSignalMediumFillIcon,
	duotone: CellSignalMediumDuotoneIcon,
} as const;

export function CellSignalMediumIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CellSignalMediumIcon as CellSignalMedium };
