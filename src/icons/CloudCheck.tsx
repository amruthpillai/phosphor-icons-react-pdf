import { CloudCheckIcon as CloudCheckBoldIcon } from "../bold/CloudCheck";
import { CloudCheckIcon as CloudCheckDuotoneIcon } from "../duotone/CloudCheck";
import { CloudCheckIcon as CloudCheckFillIcon } from "../fill/CloudCheck";
import { CloudCheckIcon as CloudCheckLightIcon } from "../light/CloudCheck";
import { CloudCheckIcon as CloudCheckRegularIcon } from "../regular/CloudCheck";
import { CloudCheckIcon as CloudCheckThinIcon } from "../thin/CloudCheck";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CloudCheckThinIcon,
	light: CloudCheckLightIcon,
	regular: CloudCheckRegularIcon,
	bold: CloudCheckBoldIcon,
	fill: CloudCheckFillIcon,
	duotone: CloudCheckDuotoneIcon,
} as const;

export function CloudCheckIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CloudCheckIcon as CloudCheck };
