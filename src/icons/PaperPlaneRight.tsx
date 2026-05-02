import { PaperPlaneRightIcon as PaperPlaneRightBoldIcon } from "../bold/PaperPlaneRight";
import { PaperPlaneRightIcon as PaperPlaneRightDuotoneIcon } from "../duotone/PaperPlaneRight";
import { PaperPlaneRightIcon as PaperPlaneRightFillIcon } from "../fill/PaperPlaneRight";
import { PaperPlaneRightIcon as PaperPlaneRightLightIcon } from "../light/PaperPlaneRight";
import { PaperPlaneRightIcon as PaperPlaneRightRegularIcon } from "../regular/PaperPlaneRight";
import { PaperPlaneRightIcon as PaperPlaneRightThinIcon } from "../thin/PaperPlaneRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PaperPlaneRightThinIcon,
	light: PaperPlaneRightLightIcon,
	regular: PaperPlaneRightRegularIcon,
	bold: PaperPlaneRightBoldIcon,
	fill: PaperPlaneRightFillIcon,
	duotone: PaperPlaneRightDuotoneIcon,
} as const;

export function PaperPlaneRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PaperPlaneRightIcon as PaperPlaneRight };
