import { BugDroidIcon as BugDroidBoldIcon } from "../bold/BugDroid";
import { BugDroidIcon as BugDroidDuotoneIcon } from "../duotone/BugDroid";
import { BugDroidIcon as BugDroidFillIcon } from "../fill/BugDroid";
import { BugDroidIcon as BugDroidLightIcon } from "../light/BugDroid";
import { BugDroidIcon as BugDroidRegularIcon } from "../regular/BugDroid";
import { BugDroidIcon as BugDroidThinIcon } from "../thin/BugDroid";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BugDroidThinIcon,
	light: BugDroidLightIcon,
	regular: BugDroidRegularIcon,
	bold: BugDroidBoldIcon,
	fill: BugDroidFillIcon,
	duotone: BugDroidDuotoneIcon,
} as const;

export function BugDroidIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BugDroidIcon as BugDroid };
