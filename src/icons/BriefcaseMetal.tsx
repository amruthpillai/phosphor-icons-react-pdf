import { BriefcaseMetalIcon as BriefcaseMetalBoldIcon } from "../bold/BriefcaseMetal";
import { BriefcaseMetalIcon as BriefcaseMetalDuotoneIcon } from "../duotone/BriefcaseMetal";
import { BriefcaseMetalIcon as BriefcaseMetalFillIcon } from "../fill/BriefcaseMetal";
import { BriefcaseMetalIcon as BriefcaseMetalLightIcon } from "../light/BriefcaseMetal";
import { BriefcaseMetalIcon as BriefcaseMetalRegularIcon } from "../regular/BriefcaseMetal";
import { BriefcaseMetalIcon as BriefcaseMetalThinIcon } from "../thin/BriefcaseMetal";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BriefcaseMetalThinIcon,
	light: BriefcaseMetalLightIcon,
	regular: BriefcaseMetalRegularIcon,
	bold: BriefcaseMetalBoldIcon,
	fill: BriefcaseMetalFillIcon,
	duotone: BriefcaseMetalDuotoneIcon,
} as const;

export function BriefcaseMetalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BriefcaseMetalIcon as BriefcaseMetal };
