import { TelevisionSimpleIcon as TelevisionSimpleBoldIcon } from "../bold/TelevisionSimple";
import { TelevisionSimpleIcon as TelevisionSimpleDuotoneIcon } from "../duotone/TelevisionSimple";
import { TelevisionSimpleIcon as TelevisionSimpleFillIcon } from "../fill/TelevisionSimple";
import { TelevisionSimpleIcon as TelevisionSimpleLightIcon } from "../light/TelevisionSimple";
import { TelevisionSimpleIcon as TelevisionSimpleRegularIcon } from "../regular/TelevisionSimple";
import { TelevisionSimpleIcon as TelevisionSimpleThinIcon } from "../thin/TelevisionSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TelevisionSimpleThinIcon,
	light: TelevisionSimpleLightIcon,
	regular: TelevisionSimpleRegularIcon,
	bold: TelevisionSimpleBoldIcon,
	fill: TelevisionSimpleFillIcon,
	duotone: TelevisionSimpleDuotoneIcon,
} as const;

export function TelevisionSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TelevisionSimpleIcon as TelevisionSimple };
