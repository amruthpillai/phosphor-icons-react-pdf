import { LadderSimpleIcon as LadderSimpleBoldIcon } from "../bold/LadderSimple";
import { LadderSimpleIcon as LadderSimpleDuotoneIcon } from "../duotone/LadderSimple";
import { LadderSimpleIcon as LadderSimpleFillIcon } from "../fill/LadderSimple";
import { LadderSimpleIcon as LadderSimpleLightIcon } from "../light/LadderSimple";
import { LadderSimpleIcon as LadderSimpleRegularIcon } from "../regular/LadderSimple";
import { LadderSimpleIcon as LadderSimpleThinIcon } from "../thin/LadderSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LadderSimpleThinIcon,
	light: LadderSimpleLightIcon,
	regular: LadderSimpleRegularIcon,
	bold: LadderSimpleBoldIcon,
	fill: LadderSimpleFillIcon,
	duotone: LadderSimpleDuotoneIcon,
} as const;

export function LadderSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LadderSimpleIcon as LadderSimple };
