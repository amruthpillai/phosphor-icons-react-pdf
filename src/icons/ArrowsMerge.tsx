import { ArrowsMergeIcon as ArrowsMergeBoldIcon } from "../bold/ArrowsMerge";
import { ArrowsMergeIcon as ArrowsMergeDuotoneIcon } from "../duotone/ArrowsMerge";
import { ArrowsMergeIcon as ArrowsMergeFillIcon } from "../fill/ArrowsMerge";
import { ArrowsMergeIcon as ArrowsMergeLightIcon } from "../light/ArrowsMerge";
import { ArrowsMergeIcon as ArrowsMergeRegularIcon } from "../regular/ArrowsMerge";
import { ArrowsMergeIcon as ArrowsMergeThinIcon } from "../thin/ArrowsMerge";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowsMergeThinIcon,
	light: ArrowsMergeLightIcon,
	regular: ArrowsMergeRegularIcon,
	bold: ArrowsMergeBoldIcon,
	fill: ArrowsMergeFillIcon,
	duotone: ArrowsMergeDuotoneIcon,
} as const;

export function ArrowsMergeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowsMergeIcon as ArrowsMerge };
