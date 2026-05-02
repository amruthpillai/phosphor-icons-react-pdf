import { PenIcon as PenBoldIcon } from "../bold/Pen";
import { PenIcon as PenDuotoneIcon } from "../duotone/Pen";
import { PenIcon as PenFillIcon } from "../fill/Pen";
import { PenIcon as PenLightIcon } from "../light/Pen";
import { PenIcon as PenRegularIcon } from "../regular/Pen";
import { PenIcon as PenThinIcon } from "../thin/Pen";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PenThinIcon,
	light: PenLightIcon,
	regular: PenRegularIcon,
	bold: PenBoldIcon,
	fill: PenFillIcon,
	duotone: PenDuotoneIcon,
} as const;

export function PenIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PenIcon as Pen };
