import { PaperclipHorizontalIcon as PaperclipHorizontalBoldIcon } from "../bold/PaperclipHorizontal";
import { PaperclipHorizontalIcon as PaperclipHorizontalDuotoneIcon } from "../duotone/PaperclipHorizontal";
import { PaperclipHorizontalIcon as PaperclipHorizontalFillIcon } from "../fill/PaperclipHorizontal";
import { PaperclipHorizontalIcon as PaperclipHorizontalLightIcon } from "../light/PaperclipHorizontal";
import { PaperclipHorizontalIcon as PaperclipHorizontalRegularIcon } from "../regular/PaperclipHorizontal";
import { PaperclipHorizontalIcon as PaperclipHorizontalThinIcon } from "../thin/PaperclipHorizontal";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PaperclipHorizontalThinIcon,
	light: PaperclipHorizontalLightIcon,
	regular: PaperclipHorizontalRegularIcon,
	bold: PaperclipHorizontalBoldIcon,
	fill: PaperclipHorizontalFillIcon,
	duotone: PaperclipHorizontalDuotoneIcon,
} as const;

export function PaperclipHorizontalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PaperclipHorizontalIcon as PaperclipHorizontal };
