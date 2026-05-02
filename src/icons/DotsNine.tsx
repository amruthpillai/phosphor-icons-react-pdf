import { DotsNineIcon as DotsNineBoldIcon } from "../bold/DotsNine";
import { DotsNineIcon as DotsNineDuotoneIcon } from "../duotone/DotsNine";
import { DotsNineIcon as DotsNineFillIcon } from "../fill/DotsNine";
import { DotsNineIcon as DotsNineLightIcon } from "../light/DotsNine";
import { DotsNineIcon as DotsNineRegularIcon } from "../regular/DotsNine";
import { DotsNineIcon as DotsNineThinIcon } from "../thin/DotsNine";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DotsNineThinIcon,
	light: DotsNineLightIcon,
	regular: DotsNineRegularIcon,
	bold: DotsNineBoldIcon,
	fill: DotsNineFillIcon,
	duotone: DotsNineDuotoneIcon,
} as const;

export function DotsNineIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DotsNineIcon as DotsNine };
