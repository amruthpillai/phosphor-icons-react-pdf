import { BoxingGloveIcon as BoxingGloveBoldIcon } from "../bold/BoxingGlove";
import { BoxingGloveIcon as BoxingGloveDuotoneIcon } from "../duotone/BoxingGlove";
import { BoxingGloveIcon as BoxingGloveFillIcon } from "../fill/BoxingGlove";
import { BoxingGloveIcon as BoxingGloveLightIcon } from "../light/BoxingGlove";
import { BoxingGloveIcon as BoxingGloveRegularIcon } from "../regular/BoxingGlove";
import { BoxingGloveIcon as BoxingGloveThinIcon } from "../thin/BoxingGlove";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BoxingGloveThinIcon,
	light: BoxingGloveLightIcon,
	regular: BoxingGloveRegularIcon,
	bold: BoxingGloveBoldIcon,
	fill: BoxingGloveFillIcon,
	duotone: BoxingGloveDuotoneIcon,
} as const;

export function BoxingGloveIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BoxingGloveIcon as BoxingGlove };
