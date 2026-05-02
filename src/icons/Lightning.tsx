import { LightningIcon as LightningBoldIcon } from "../bold/Lightning";
import { LightningIcon as LightningDuotoneIcon } from "../duotone/Lightning";
import { LightningIcon as LightningFillIcon } from "../fill/Lightning";
import { LightningIcon as LightningLightIcon } from "../light/Lightning";
import { LightningIcon as LightningRegularIcon } from "../regular/Lightning";
import { LightningIcon as LightningThinIcon } from "../thin/Lightning";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LightningThinIcon,
	light: LightningLightIcon,
	regular: LightningRegularIcon,
	bold: LightningBoldIcon,
	fill: LightningFillIcon,
	duotone: LightningDuotoneIcon,
} as const;

export function LightningIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LightningIcon as Lightning };
