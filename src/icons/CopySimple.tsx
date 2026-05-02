import { CopySimpleIcon as CopySimpleBoldIcon } from "../bold/CopySimple";
import { CopySimpleIcon as CopySimpleDuotoneIcon } from "../duotone/CopySimple";
import { CopySimpleIcon as CopySimpleFillIcon } from "../fill/CopySimple";
import { CopySimpleIcon as CopySimpleLightIcon } from "../light/CopySimple";
import { CopySimpleIcon as CopySimpleRegularIcon } from "../regular/CopySimple";
import { CopySimpleIcon as CopySimpleThinIcon } from "../thin/CopySimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CopySimpleThinIcon,
	light: CopySimpleLightIcon,
	regular: CopySimpleRegularIcon,
	bold: CopySimpleBoldIcon,
	fill: CopySimpleFillIcon,
	duotone: CopySimpleDuotoneIcon,
} as const;

export function CopySimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CopySimpleIcon as CopySimple };
