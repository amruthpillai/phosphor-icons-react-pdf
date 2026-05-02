import { ArrowFatLinesDownIcon as ArrowFatLinesDownBoldIcon } from "../bold/ArrowFatLinesDown";
import { ArrowFatLinesDownIcon as ArrowFatLinesDownDuotoneIcon } from "../duotone/ArrowFatLinesDown";
import { ArrowFatLinesDownIcon as ArrowFatLinesDownFillIcon } from "../fill/ArrowFatLinesDown";
import { ArrowFatLinesDownIcon as ArrowFatLinesDownLightIcon } from "../light/ArrowFatLinesDown";
import { ArrowFatLinesDownIcon as ArrowFatLinesDownRegularIcon } from "../regular/ArrowFatLinesDown";
import { ArrowFatLinesDownIcon as ArrowFatLinesDownThinIcon } from "../thin/ArrowFatLinesDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowFatLinesDownThinIcon,
	light: ArrowFatLinesDownLightIcon,
	regular: ArrowFatLinesDownRegularIcon,
	bold: ArrowFatLinesDownBoldIcon,
	fill: ArrowFatLinesDownFillIcon,
	duotone: ArrowFatLinesDownDuotoneIcon,
} as const;

export function ArrowFatLinesDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowFatLinesDownIcon as ArrowFatLinesDown };
