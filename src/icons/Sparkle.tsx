import { SparkleIcon as SparkleBoldIcon } from "../bold/Sparkle";
import { SparkleIcon as SparkleDuotoneIcon } from "../duotone/Sparkle";
import { SparkleIcon as SparkleFillIcon } from "../fill/Sparkle";
import { SparkleIcon as SparkleLightIcon } from "../light/Sparkle";
import { SparkleIcon as SparkleRegularIcon } from "../regular/Sparkle";
import { SparkleIcon as SparkleThinIcon } from "../thin/Sparkle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SparkleThinIcon,
	light: SparkleLightIcon,
	regular: SparkleRegularIcon,
	bold: SparkleBoldIcon,
	fill: SparkleFillIcon,
	duotone: SparkleDuotoneIcon,
} as const;

export function SparkleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SparkleIcon as Sparkle };
