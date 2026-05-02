import { AlignBottomIcon as AlignBottomBoldIcon } from "../bold/AlignBottom";
import { AlignBottomIcon as AlignBottomDuotoneIcon } from "../duotone/AlignBottom";
import { AlignBottomIcon as AlignBottomFillIcon } from "../fill/AlignBottom";
import { AlignBottomIcon as AlignBottomLightIcon } from "../light/AlignBottom";
import { AlignBottomIcon as AlignBottomRegularIcon } from "../regular/AlignBottom";
import { AlignBottomIcon as AlignBottomThinIcon } from "../thin/AlignBottom";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AlignBottomThinIcon,
	light: AlignBottomLightIcon,
	regular: AlignBottomRegularIcon,
	bold: AlignBottomBoldIcon,
	fill: AlignBottomFillIcon,
	duotone: AlignBottomDuotoneIcon,
} as const;

export function AlignBottomIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AlignBottomIcon as AlignBottom };
