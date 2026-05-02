import { SuitcaseIcon as SuitcaseBoldIcon } from "../bold/Suitcase";
import { SuitcaseIcon as SuitcaseDuotoneIcon } from "../duotone/Suitcase";
import { SuitcaseIcon as SuitcaseFillIcon } from "../fill/Suitcase";
import { SuitcaseIcon as SuitcaseLightIcon } from "../light/Suitcase";
import { SuitcaseIcon as SuitcaseRegularIcon } from "../regular/Suitcase";
import { SuitcaseIcon as SuitcaseThinIcon } from "../thin/Suitcase";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SuitcaseThinIcon,
	light: SuitcaseLightIcon,
	regular: SuitcaseRegularIcon,
	bold: SuitcaseBoldIcon,
	fill: SuitcaseFillIcon,
	duotone: SuitcaseDuotoneIcon,
} as const;

export function SuitcaseIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SuitcaseIcon as Suitcase };
