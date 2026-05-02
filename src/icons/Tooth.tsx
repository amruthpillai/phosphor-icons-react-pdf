import { ToothIcon as ToothBoldIcon } from "../bold/Tooth";
import { ToothIcon as ToothDuotoneIcon } from "../duotone/Tooth";
import { ToothIcon as ToothFillIcon } from "../fill/Tooth";
import { ToothIcon as ToothLightIcon } from "../light/Tooth";
import { ToothIcon as ToothRegularIcon } from "../regular/Tooth";
import { ToothIcon as ToothThinIcon } from "../thin/Tooth";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ToothThinIcon,
	light: ToothLightIcon,
	regular: ToothRegularIcon,
	bold: ToothBoldIcon,
	fill: ToothFillIcon,
	duotone: ToothDuotoneIcon,
} as const;

export function ToothIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ToothIcon as Tooth };
