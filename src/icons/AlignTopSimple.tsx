import { AlignTopSimpleIcon as AlignTopSimpleBoldIcon } from "../bold/AlignTopSimple";
import { AlignTopSimpleIcon as AlignTopSimpleDuotoneIcon } from "../duotone/AlignTopSimple";
import { AlignTopSimpleIcon as AlignTopSimpleFillIcon } from "../fill/AlignTopSimple";
import { AlignTopSimpleIcon as AlignTopSimpleLightIcon } from "../light/AlignTopSimple";
import { AlignTopSimpleIcon as AlignTopSimpleRegularIcon } from "../regular/AlignTopSimple";
import { AlignTopSimpleIcon as AlignTopSimpleThinIcon } from "../thin/AlignTopSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AlignTopSimpleThinIcon,
	light: AlignTopSimpleLightIcon,
	regular: AlignTopSimpleRegularIcon,
	bold: AlignTopSimpleBoldIcon,
	fill: AlignTopSimpleFillIcon,
	duotone: AlignTopSimpleDuotoneIcon,
} as const;

export function AlignTopSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AlignTopSimpleIcon as AlignTopSimple };
