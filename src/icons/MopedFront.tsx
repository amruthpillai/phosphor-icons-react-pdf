import { MopedFrontIcon as MopedFrontBoldIcon } from "../bold/MopedFront";
import { MopedFrontIcon as MopedFrontDuotoneIcon } from "../duotone/MopedFront";
import { MopedFrontIcon as MopedFrontFillIcon } from "../fill/MopedFront";
import { MopedFrontIcon as MopedFrontLightIcon } from "../light/MopedFront";
import { MopedFrontIcon as MopedFrontRegularIcon } from "../regular/MopedFront";
import { MopedFrontIcon as MopedFrontThinIcon } from "../thin/MopedFront";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MopedFrontThinIcon,
	light: MopedFrontLightIcon,
	regular: MopedFrontRegularIcon,
	bold: MopedFrontBoldIcon,
	fill: MopedFrontFillIcon,
	duotone: MopedFrontDuotoneIcon,
} as const;

export function MopedFrontIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MopedFrontIcon as MopedFront };
