import { CloudLightningIcon as CloudLightningBoldIcon } from "../bold/CloudLightning";
import { CloudLightningIcon as CloudLightningDuotoneIcon } from "../duotone/CloudLightning";
import { CloudLightningIcon as CloudLightningFillIcon } from "../fill/CloudLightning";
import { CloudLightningIcon as CloudLightningLightIcon } from "../light/CloudLightning";
import { CloudLightningIcon as CloudLightningRegularIcon } from "../regular/CloudLightning";
import { CloudLightningIcon as CloudLightningThinIcon } from "../thin/CloudLightning";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CloudLightningThinIcon,
	light: CloudLightningLightIcon,
	regular: CloudLightningRegularIcon,
	bold: CloudLightningBoldIcon,
	fill: CloudLightningFillIcon,
	duotone: CloudLightningDuotoneIcon,
} as const;

export function CloudLightningIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CloudLightningIcon as CloudLightning };
