import { BracketsCurlyIcon as BracketsCurlyBoldIcon } from "../bold/BracketsCurly";
import { BracketsCurlyIcon as BracketsCurlyDuotoneIcon } from "../duotone/BracketsCurly";
import { BracketsCurlyIcon as BracketsCurlyFillIcon } from "../fill/BracketsCurly";
import { BracketsCurlyIcon as BracketsCurlyLightIcon } from "../light/BracketsCurly";
import { BracketsCurlyIcon as BracketsCurlyRegularIcon } from "../regular/BracketsCurly";
import { BracketsCurlyIcon as BracketsCurlyThinIcon } from "../thin/BracketsCurly";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BracketsCurlyThinIcon,
	light: BracketsCurlyLightIcon,
	regular: BracketsCurlyRegularIcon,
	bold: BracketsCurlyBoldIcon,
	fill: BracketsCurlyFillIcon,
	duotone: BracketsCurlyDuotoneIcon,
} as const;

export function BracketsCurlyIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BracketsCurlyIcon as BracketsCurly };
