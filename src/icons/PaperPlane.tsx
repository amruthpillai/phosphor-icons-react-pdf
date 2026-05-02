import { PaperPlaneIcon as PaperPlaneBoldIcon } from "../bold/PaperPlane";
import { PaperPlaneIcon as PaperPlaneDuotoneIcon } from "../duotone/PaperPlane";
import { PaperPlaneIcon as PaperPlaneFillIcon } from "../fill/PaperPlane";
import { PaperPlaneIcon as PaperPlaneLightIcon } from "../light/PaperPlane";
import { PaperPlaneIcon as PaperPlaneRegularIcon } from "../regular/PaperPlane";
import { PaperPlaneIcon as PaperPlaneThinIcon } from "../thin/PaperPlane";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PaperPlaneThinIcon,
	light: PaperPlaneLightIcon,
	regular: PaperPlaneRegularIcon,
	bold: PaperPlaneBoldIcon,
	fill: PaperPlaneFillIcon,
	duotone: PaperPlaneDuotoneIcon,
} as const;

export function PaperPlaneIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PaperPlaneIcon as PaperPlane };
