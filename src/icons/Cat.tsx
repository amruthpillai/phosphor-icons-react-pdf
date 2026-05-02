import { CatIcon as CatBoldIcon } from "../bold/Cat";
import { CatIcon as CatDuotoneIcon } from "../duotone/Cat";
import { CatIcon as CatFillIcon } from "../fill/Cat";
import { CatIcon as CatLightIcon } from "../light/Cat";
import { CatIcon as CatRegularIcon } from "../regular/Cat";
import { CatIcon as CatThinIcon } from "../thin/Cat";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CatThinIcon,
	light: CatLightIcon,
	regular: CatRegularIcon,
	bold: CatBoldIcon,
	fill: CatFillIcon,
	duotone: CatDuotoneIcon,
} as const;

export function CatIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CatIcon as Cat };
