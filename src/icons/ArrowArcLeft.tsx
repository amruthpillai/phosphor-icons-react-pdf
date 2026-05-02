import { ArrowArcLeftIcon as ArrowArcLeftBoldIcon } from "../bold/ArrowArcLeft";
import { ArrowArcLeftIcon as ArrowArcLeftDuotoneIcon } from "../duotone/ArrowArcLeft";
import { ArrowArcLeftIcon as ArrowArcLeftFillIcon } from "../fill/ArrowArcLeft";
import { ArrowArcLeftIcon as ArrowArcLeftLightIcon } from "../light/ArrowArcLeft";
import { ArrowArcLeftIcon as ArrowArcLeftRegularIcon } from "../regular/ArrowArcLeft";
import { ArrowArcLeftIcon as ArrowArcLeftThinIcon } from "../thin/ArrowArcLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowArcLeftThinIcon,
	light: ArrowArcLeftLightIcon,
	regular: ArrowArcLeftRegularIcon,
	bold: ArrowArcLeftBoldIcon,
	fill: ArrowArcLeftFillIcon,
	duotone: ArrowArcLeftDuotoneIcon,
} as const;

export function ArrowArcLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowArcLeftIcon as ArrowArcLeft };
