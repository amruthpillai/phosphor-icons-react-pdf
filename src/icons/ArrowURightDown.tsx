import { ArrowURightDownIcon as ArrowURightDownBoldIcon } from "../bold/ArrowURightDown";
import { ArrowURightDownIcon as ArrowURightDownDuotoneIcon } from "../duotone/ArrowURightDown";
import { ArrowURightDownIcon as ArrowURightDownFillIcon } from "../fill/ArrowURightDown";
import { ArrowURightDownIcon as ArrowURightDownLightIcon } from "../light/ArrowURightDown";
import { ArrowURightDownIcon as ArrowURightDownRegularIcon } from "../regular/ArrowURightDown";
import { ArrowURightDownIcon as ArrowURightDownThinIcon } from "../thin/ArrowURightDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowURightDownThinIcon,
	light: ArrowURightDownLightIcon,
	regular: ArrowURightDownRegularIcon,
	bold: ArrowURightDownBoldIcon,
	fill: ArrowURightDownFillIcon,
	duotone: ArrowURightDownDuotoneIcon,
} as const;

export function ArrowURightDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowURightDownIcon as ArrowURightDown };
