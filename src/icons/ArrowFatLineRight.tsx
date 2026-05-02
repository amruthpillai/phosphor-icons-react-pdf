import { ArrowFatLineRightIcon as ArrowFatLineRightBoldIcon } from "../bold/ArrowFatLineRight";
import { ArrowFatLineRightIcon as ArrowFatLineRightDuotoneIcon } from "../duotone/ArrowFatLineRight";
import { ArrowFatLineRightIcon as ArrowFatLineRightFillIcon } from "../fill/ArrowFatLineRight";
import { ArrowFatLineRightIcon as ArrowFatLineRightLightIcon } from "../light/ArrowFatLineRight";
import { ArrowFatLineRightIcon as ArrowFatLineRightRegularIcon } from "../regular/ArrowFatLineRight";
import { ArrowFatLineRightIcon as ArrowFatLineRightThinIcon } from "../thin/ArrowFatLineRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowFatLineRightThinIcon,
	light: ArrowFatLineRightLightIcon,
	regular: ArrowFatLineRightRegularIcon,
	bold: ArrowFatLineRightBoldIcon,
	fill: ArrowFatLineRightFillIcon,
	duotone: ArrowFatLineRightDuotoneIcon,
} as const;

export function ArrowFatLineRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowFatLineRightIcon as ArrowFatLineRight };
