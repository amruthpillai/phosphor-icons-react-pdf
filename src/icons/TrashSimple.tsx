import { TrashSimpleIcon as TrashSimpleBoldIcon } from "../bold/TrashSimple";
import { TrashSimpleIcon as TrashSimpleDuotoneIcon } from "../duotone/TrashSimple";
import { TrashSimpleIcon as TrashSimpleFillIcon } from "../fill/TrashSimple";
import { TrashSimpleIcon as TrashSimpleLightIcon } from "../light/TrashSimple";
import { TrashSimpleIcon as TrashSimpleRegularIcon } from "../regular/TrashSimple";
import { TrashSimpleIcon as TrashSimpleThinIcon } from "../thin/TrashSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TrashSimpleThinIcon,
	light: TrashSimpleLightIcon,
	regular: TrashSimpleRegularIcon,
	bold: TrashSimpleBoldIcon,
	fill: TrashSimpleFillIcon,
	duotone: TrashSimpleDuotoneIcon,
} as const;

export function TrashSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TrashSimpleIcon as TrashSimple };
