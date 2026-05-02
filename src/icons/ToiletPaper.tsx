import { ToiletPaperIcon as ToiletPaperBoldIcon } from "../bold/ToiletPaper";
import { ToiletPaperIcon as ToiletPaperDuotoneIcon } from "../duotone/ToiletPaper";
import { ToiletPaperIcon as ToiletPaperFillIcon } from "../fill/ToiletPaper";
import { ToiletPaperIcon as ToiletPaperLightIcon } from "../light/ToiletPaper";
import { ToiletPaperIcon as ToiletPaperRegularIcon } from "../regular/ToiletPaper";
import { ToiletPaperIcon as ToiletPaperThinIcon } from "../thin/ToiletPaper";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ToiletPaperThinIcon,
	light: ToiletPaperLightIcon,
	regular: ToiletPaperRegularIcon,
	bold: ToiletPaperBoldIcon,
	fill: ToiletPaperFillIcon,
	duotone: ToiletPaperDuotoneIcon,
} as const;

export function ToiletPaperIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ToiletPaperIcon as ToiletPaper };
