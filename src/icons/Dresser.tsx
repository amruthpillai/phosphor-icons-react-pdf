import { DresserIcon as DresserBoldIcon } from "../bold/Dresser";
import { DresserIcon as DresserDuotoneIcon } from "../duotone/Dresser";
import { DresserIcon as DresserFillIcon } from "../fill/Dresser";
import { DresserIcon as DresserLightIcon } from "../light/Dresser";
import { DresserIcon as DresserRegularIcon } from "../regular/Dresser";
import { DresserIcon as DresserThinIcon } from "../thin/Dresser";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DresserThinIcon,
	light: DresserLightIcon,
	regular: DresserRegularIcon,
	bold: DresserBoldIcon,
	fill: DresserFillIcon,
	duotone: DresserDuotoneIcon,
} as const;

export function DresserIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DresserIcon as Dresser };
