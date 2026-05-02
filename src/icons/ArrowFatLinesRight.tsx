import { ArrowFatLinesRightIcon as ArrowFatLinesRightBoldIcon } from "../bold/ArrowFatLinesRight";
import { ArrowFatLinesRightIcon as ArrowFatLinesRightDuotoneIcon } from "../duotone/ArrowFatLinesRight";
import { ArrowFatLinesRightIcon as ArrowFatLinesRightFillIcon } from "../fill/ArrowFatLinesRight";
import { ArrowFatLinesRightIcon as ArrowFatLinesRightLightIcon } from "../light/ArrowFatLinesRight";
import { ArrowFatLinesRightIcon as ArrowFatLinesRightRegularIcon } from "../regular/ArrowFatLinesRight";
import { ArrowFatLinesRightIcon as ArrowFatLinesRightThinIcon } from "../thin/ArrowFatLinesRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowFatLinesRightThinIcon,
	light: ArrowFatLinesRightLightIcon,
	regular: ArrowFatLinesRightRegularIcon,
	bold: ArrowFatLinesRightBoldIcon,
	fill: ArrowFatLinesRightFillIcon,
	duotone: ArrowFatLinesRightDuotoneIcon,
} as const;

export function ArrowFatLinesRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowFatLinesRightIcon as ArrowFatLinesRight };
