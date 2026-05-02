import { BriefcaseIcon as BriefcaseBoldIcon } from "../bold/Briefcase";
import { BriefcaseIcon as BriefcaseDuotoneIcon } from "../duotone/Briefcase";
import { BriefcaseIcon as BriefcaseFillIcon } from "../fill/Briefcase";
import { BriefcaseIcon as BriefcaseLightIcon } from "../light/Briefcase";
import { BriefcaseIcon as BriefcaseRegularIcon } from "../regular/Briefcase";
import { BriefcaseIcon as BriefcaseThinIcon } from "../thin/Briefcase";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BriefcaseThinIcon,
	light: BriefcaseLightIcon,
	regular: BriefcaseRegularIcon,
	bold: BriefcaseBoldIcon,
	fill: BriefcaseFillIcon,
	duotone: BriefcaseDuotoneIcon,
} as const;

export function BriefcaseIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BriefcaseIcon as Briefcase };
