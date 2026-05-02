import { ScanSmileyIcon as ScanSmileyBoldIcon } from "../bold/ScanSmiley";
import { ScanSmileyIcon as ScanSmileyDuotoneIcon } from "../duotone/ScanSmiley";
import { ScanSmileyIcon as ScanSmileyFillIcon } from "../fill/ScanSmiley";
import { ScanSmileyIcon as ScanSmileyLightIcon } from "../light/ScanSmiley";
import { ScanSmileyIcon as ScanSmileyRegularIcon } from "../regular/ScanSmiley";
import { ScanSmileyIcon as ScanSmileyThinIcon } from "../thin/ScanSmiley";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ScanSmileyThinIcon,
	light: ScanSmileyLightIcon,
	regular: ScanSmileyRegularIcon,
	bold: ScanSmileyBoldIcon,
	fill: ScanSmileyFillIcon,
	duotone: ScanSmileyDuotoneIcon,
} as const;

export function ScanSmileyIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ScanSmileyIcon as ScanSmiley };
