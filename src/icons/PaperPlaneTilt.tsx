import { PaperPlaneTiltIcon as PaperPlaneTiltBoldIcon } from "../bold/PaperPlaneTilt";
import { PaperPlaneTiltIcon as PaperPlaneTiltDuotoneIcon } from "../duotone/PaperPlaneTilt";
import { PaperPlaneTiltIcon as PaperPlaneTiltFillIcon } from "../fill/PaperPlaneTilt";
import { PaperPlaneTiltIcon as PaperPlaneTiltLightIcon } from "../light/PaperPlaneTilt";
import { PaperPlaneTiltIcon as PaperPlaneTiltRegularIcon } from "../regular/PaperPlaneTilt";
import { PaperPlaneTiltIcon as PaperPlaneTiltThinIcon } from "../thin/PaperPlaneTilt";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PaperPlaneTiltThinIcon,
	light: PaperPlaneTiltLightIcon,
	regular: PaperPlaneTiltRegularIcon,
	bold: PaperPlaneTiltBoldIcon,
	fill: PaperPlaneTiltFillIcon,
	duotone: PaperPlaneTiltDuotoneIcon,
} as const;

export function PaperPlaneTiltIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PaperPlaneTiltIcon as PaperPlaneTilt };
