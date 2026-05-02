import { PencilSimpleIcon as PencilSimpleBoldIcon } from "../bold/PencilSimple";
import { PencilSimpleIcon as PencilSimpleDuotoneIcon } from "../duotone/PencilSimple";
import { PencilSimpleIcon as PencilSimpleFillIcon } from "../fill/PencilSimple";
import { PencilSimpleIcon as PencilSimpleLightIcon } from "../light/PencilSimple";
import { PencilSimpleIcon as PencilSimpleRegularIcon } from "../regular/PencilSimple";
import { PencilSimpleIcon as PencilSimpleThinIcon } from "../thin/PencilSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PencilSimpleThinIcon,
	light: PencilSimpleLightIcon,
	regular: PencilSimpleRegularIcon,
	bold: PencilSimpleBoldIcon,
	fill: PencilSimpleFillIcon,
	duotone: PencilSimpleDuotoneIcon,
} as const;

export function PencilSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PencilSimpleIcon as PencilSimple };
