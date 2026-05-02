import { LightningAIcon as LightningABoldIcon } from "../bold/LightningA";
import { LightningAIcon as LightningADuotoneIcon } from "../duotone/LightningA";
import { LightningAIcon as LightningAFillIcon } from "../fill/LightningA";
import { LightningAIcon as LightningALightIcon } from "../light/LightningA";
import { LightningAIcon as LightningARegularIcon } from "../regular/LightningA";
import { LightningAIcon as LightningAThinIcon } from "../thin/LightningA";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LightningAThinIcon,
	light: LightningALightIcon,
	regular: LightningARegularIcon,
	bold: LightningABoldIcon,
	fill: LightningAFillIcon,
	duotone: LightningADuotoneIcon,
} as const;

export function LightningAIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LightningAIcon as LightningA };
