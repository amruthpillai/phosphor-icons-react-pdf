import { BugBeetleIcon as BugBeetleBoldIcon } from "../bold/BugBeetle";
import { BugBeetleIcon as BugBeetleDuotoneIcon } from "../duotone/BugBeetle";
import { BugBeetleIcon as BugBeetleFillIcon } from "../fill/BugBeetle";
import { BugBeetleIcon as BugBeetleLightIcon } from "../light/BugBeetle";
import { BugBeetleIcon as BugBeetleRegularIcon } from "../regular/BugBeetle";
import { BugBeetleIcon as BugBeetleThinIcon } from "../thin/BugBeetle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BugBeetleThinIcon,
	light: BugBeetleLightIcon,
	regular: BugBeetleRegularIcon,
	bold: BugBeetleBoldIcon,
	fill: BugBeetleFillIcon,
	duotone: BugBeetleDuotoneIcon,
} as const;

export function BugBeetleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BugBeetleIcon as BugBeetle };
