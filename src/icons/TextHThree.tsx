import { TextHThreeIcon as TextHThreeBoldIcon } from "../bold/TextHThree";
import { TextHThreeIcon as TextHThreeDuotoneIcon } from "../duotone/TextHThree";
import { TextHThreeIcon as TextHThreeFillIcon } from "../fill/TextHThree";
import { TextHThreeIcon as TextHThreeLightIcon } from "../light/TextHThree";
import { TextHThreeIcon as TextHThreeRegularIcon } from "../regular/TextHThree";
import { TextHThreeIcon as TextHThreeThinIcon } from "../thin/TextHThree";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextHThreeThinIcon,
	light: TextHThreeLightIcon,
	regular: TextHThreeRegularIcon,
	bold: TextHThreeBoldIcon,
	fill: TextHThreeFillIcon,
	duotone: TextHThreeDuotoneIcon,
} as const;

export function TextHThreeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextHThreeIcon as TextHThree };
