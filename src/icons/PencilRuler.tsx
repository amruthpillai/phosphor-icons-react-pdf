import { PencilRulerIcon as PencilRulerBoldIcon } from "../bold/PencilRuler";
import { PencilRulerIcon as PencilRulerDuotoneIcon } from "../duotone/PencilRuler";
import { PencilRulerIcon as PencilRulerFillIcon } from "../fill/PencilRuler";
import { PencilRulerIcon as PencilRulerLightIcon } from "../light/PencilRuler";
import { PencilRulerIcon as PencilRulerRegularIcon } from "../regular/PencilRuler";
import { PencilRulerIcon as PencilRulerThinIcon } from "../thin/PencilRuler";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PencilRulerThinIcon,
	light: PencilRulerLightIcon,
	regular: PencilRulerRegularIcon,
	bold: PencilRulerBoldIcon,
	fill: PencilRulerFillIcon,
	duotone: PencilRulerDuotoneIcon,
} as const;

export function PencilRulerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PencilRulerIcon as PencilRuler };
