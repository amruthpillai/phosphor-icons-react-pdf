import { TractorIcon as TractorBoldIcon } from "../bold/Tractor";
import { TractorIcon as TractorDuotoneIcon } from "../duotone/Tractor";
import { TractorIcon as TractorFillIcon } from "../fill/Tractor";
import { TractorIcon as TractorLightIcon } from "../light/Tractor";
import { TractorIcon as TractorRegularIcon } from "../regular/Tractor";
import { TractorIcon as TractorThinIcon } from "../thin/Tractor";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TractorThinIcon,
	light: TractorLightIcon,
	regular: TractorRegularIcon,
	bold: TractorBoldIcon,
	fill: TractorFillIcon,
	duotone: TractorDuotoneIcon,
} as const;

export function TractorIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TractorIcon as Tractor };
