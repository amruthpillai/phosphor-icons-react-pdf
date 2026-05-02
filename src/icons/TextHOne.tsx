import { TextHOneIcon as TextHOneBoldIcon } from "../bold/TextHOne";
import { TextHOneIcon as TextHOneDuotoneIcon } from "../duotone/TextHOne";
import { TextHOneIcon as TextHOneFillIcon } from "../fill/TextHOne";
import { TextHOneIcon as TextHOneLightIcon } from "../light/TextHOne";
import { TextHOneIcon as TextHOneRegularIcon } from "../regular/TextHOne";
import { TextHOneIcon as TextHOneThinIcon } from "../thin/TextHOne";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextHOneThinIcon,
	light: TextHOneLightIcon,
	regular: TextHOneRegularIcon,
	bold: TextHOneBoldIcon,
	fill: TextHOneFillIcon,
	duotone: TextHOneDuotoneIcon,
} as const;

export function TextHOneIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextHOneIcon as TextHOne };
