import { CloudXIcon as CloudXBoldIcon } from "../bold/CloudX";
import { CloudXIcon as CloudXDuotoneIcon } from "../duotone/CloudX";
import { CloudXIcon as CloudXFillIcon } from "../fill/CloudX";
import { CloudXIcon as CloudXLightIcon } from "../light/CloudX";
import { CloudXIcon as CloudXRegularIcon } from "../regular/CloudX";
import { CloudXIcon as CloudXThinIcon } from "../thin/CloudX";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CloudXThinIcon,
	light: CloudXLightIcon,
	regular: CloudXRegularIcon,
	bold: CloudXBoldIcon,
	fill: CloudXFillIcon,
	duotone: CloudXDuotoneIcon,
} as const;

export function CloudXIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CloudXIcon as CloudX };
