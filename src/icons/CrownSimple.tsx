import { CrownSimpleIcon as CrownSimpleBoldIcon } from "../bold/CrownSimple";
import { CrownSimpleIcon as CrownSimpleDuotoneIcon } from "../duotone/CrownSimple";
import { CrownSimpleIcon as CrownSimpleFillIcon } from "../fill/CrownSimple";
import { CrownSimpleIcon as CrownSimpleLightIcon } from "../light/CrownSimple";
import { CrownSimpleIcon as CrownSimpleRegularIcon } from "../regular/CrownSimple";
import { CrownSimpleIcon as CrownSimpleThinIcon } from "../thin/CrownSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CrownSimpleThinIcon,
	light: CrownSimpleLightIcon,
	regular: CrownSimpleRegularIcon,
	bold: CrownSimpleBoldIcon,
	fill: CrownSimpleFillIcon,
	duotone: CrownSimpleDuotoneIcon,
} as const;

export function CrownSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CrownSimpleIcon as CrownSimple };
