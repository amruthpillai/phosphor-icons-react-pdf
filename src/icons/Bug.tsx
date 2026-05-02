import { BugIcon as BugBoldIcon } from "../bold/Bug";
import { BugIcon as BugDuotoneIcon } from "../duotone/Bug";
import { BugIcon as BugFillIcon } from "../fill/Bug";
import { BugIcon as BugLightIcon } from "../light/Bug";
import { BugIcon as BugRegularIcon } from "../regular/Bug";
import { BugIcon as BugThinIcon } from "../thin/Bug";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BugThinIcon,
	light: BugLightIcon,
	regular: BugRegularIcon,
	bold: BugBoldIcon,
	fill: BugFillIcon,
	duotone: BugDuotoneIcon,
} as const;

export function BugIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BugIcon as Bug };
