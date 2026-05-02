import { ShrimpIcon as ShrimpBoldIcon } from "../bold/Shrimp";
import { ShrimpIcon as ShrimpDuotoneIcon } from "../duotone/Shrimp";
import { ShrimpIcon as ShrimpFillIcon } from "../fill/Shrimp";
import { ShrimpIcon as ShrimpLightIcon } from "../light/Shrimp";
import { ShrimpIcon as ShrimpRegularIcon } from "../regular/Shrimp";
import { ShrimpIcon as ShrimpThinIcon } from "../thin/Shrimp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShrimpThinIcon,
	light: ShrimpLightIcon,
	regular: ShrimpRegularIcon,
	bold: ShrimpBoldIcon,
	fill: ShrimpFillIcon,
	duotone: ShrimpDuotoneIcon,
} as const;

export function ShrimpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShrimpIcon as Shrimp };
