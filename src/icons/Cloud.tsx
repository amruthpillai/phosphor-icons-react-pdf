import { CloudIcon as CloudBoldIcon } from "../bold/Cloud";
import { CloudIcon as CloudDuotoneIcon } from "../duotone/Cloud";
import { CloudIcon as CloudFillIcon } from "../fill/Cloud";
import { CloudIcon as CloudLightIcon } from "../light/Cloud";
import { CloudIcon as CloudRegularIcon } from "../regular/Cloud";
import { CloudIcon as CloudThinIcon } from "../thin/Cloud";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CloudThinIcon,
	light: CloudLightIcon,
	regular: CloudRegularIcon,
	bold: CloudBoldIcon,
	fill: CloudFillIcon,
	duotone: CloudDuotoneIcon,
} as const;

export function CloudIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CloudIcon as Cloud };
