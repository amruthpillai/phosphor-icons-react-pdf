import { PresentationIcon as PresentationBoldIcon } from "../bold/Presentation";
import { PresentationIcon as PresentationDuotoneIcon } from "../duotone/Presentation";
import { PresentationIcon as PresentationFillIcon } from "../fill/Presentation";
import { PresentationIcon as PresentationLightIcon } from "../light/Presentation";
import { PresentationIcon as PresentationRegularIcon } from "../regular/Presentation";
import { PresentationIcon as PresentationThinIcon } from "../thin/Presentation";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PresentationThinIcon,
	light: PresentationLightIcon,
	regular: PresentationRegularIcon,
	bold: PresentationBoldIcon,
	fill: PresentationFillIcon,
	duotone: PresentationDuotoneIcon,
} as const;

export function PresentationIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PresentationIcon as Presentation };
