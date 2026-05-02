import { ScanIcon as ScanBoldIcon } from "../bold/Scan";
import { ScanIcon as ScanDuotoneIcon } from "../duotone/Scan";
import { ScanIcon as ScanFillIcon } from "../fill/Scan";
import { ScanIcon as ScanLightIcon } from "../light/Scan";
import { ScanIcon as ScanRegularIcon } from "../regular/Scan";
import { ScanIcon as ScanThinIcon } from "../thin/Scan";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ScanThinIcon,
	light: ScanLightIcon,
	regular: ScanRegularIcon,
	bold: ScanBoldIcon,
	fill: ScanFillIcon,
	duotone: ScanDuotoneIcon,
} as const;

export function ScanIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ScanIcon as Scan };
