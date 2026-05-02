import { PawPrintIcon as PawPrintBoldIcon } from "../bold/PawPrint";
import { PawPrintIcon as PawPrintDuotoneIcon } from "../duotone/PawPrint";
import { PawPrintIcon as PawPrintFillIcon } from "../fill/PawPrint";
import { PawPrintIcon as PawPrintLightIcon } from "../light/PawPrint";
import { PawPrintIcon as PawPrintRegularIcon } from "../regular/PawPrint";
import { PawPrintIcon as PawPrintThinIcon } from "../thin/PawPrint";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PawPrintThinIcon,
	light: PawPrintLightIcon,
	regular: PawPrintRegularIcon,
	bold: PawPrintBoldIcon,
	fill: PawPrintFillIcon,
	duotone: PawPrintDuotoneIcon,
} as const;

export function PawPrintIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PawPrintIcon as PawPrint };
