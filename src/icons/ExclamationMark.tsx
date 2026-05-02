import { ExclamationMarkIcon as ExclamationMarkBoldIcon } from "../bold/ExclamationMark";
import { ExclamationMarkIcon as ExclamationMarkDuotoneIcon } from "../duotone/ExclamationMark";
import { ExclamationMarkIcon as ExclamationMarkFillIcon } from "../fill/ExclamationMark";
import { ExclamationMarkIcon as ExclamationMarkLightIcon } from "../light/ExclamationMark";
import { ExclamationMarkIcon as ExclamationMarkRegularIcon } from "../regular/ExclamationMark";
import { ExclamationMarkIcon as ExclamationMarkThinIcon } from "../thin/ExclamationMark";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ExclamationMarkThinIcon,
	light: ExclamationMarkLightIcon,
	regular: ExclamationMarkRegularIcon,
	bold: ExclamationMarkBoldIcon,
	fill: ExclamationMarkFillIcon,
	duotone: ExclamationMarkDuotoneIcon,
} as const;

export function ExclamationMarkIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ExclamationMarkIcon as ExclamationMark };
