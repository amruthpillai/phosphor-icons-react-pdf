import { UnionIcon as UnionBoldIcon } from "../bold/Union";
import { UnionIcon as UnionDuotoneIcon } from "../duotone/Union";
import { UnionIcon as UnionFillIcon } from "../fill/Union";
import { UnionIcon as UnionLightIcon } from "../light/Union";
import { UnionIcon as UnionRegularIcon } from "../regular/Union";
import { UnionIcon as UnionThinIcon } from "../thin/Union";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UnionThinIcon,
	light: UnionLightIcon,
	regular: UnionRegularIcon,
	bold: UnionBoldIcon,
	fill: UnionFillIcon,
	duotone: UnionDuotoneIcon,
} as const;

export function UnionIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UnionIcon as Union };
