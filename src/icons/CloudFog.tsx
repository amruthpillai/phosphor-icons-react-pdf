import { CloudFogIcon as CloudFogBoldIcon } from "../bold/CloudFog";
import { CloudFogIcon as CloudFogDuotoneIcon } from "../duotone/CloudFog";
import { CloudFogIcon as CloudFogFillIcon } from "../fill/CloudFog";
import { CloudFogIcon as CloudFogLightIcon } from "../light/CloudFog";
import { CloudFogIcon as CloudFogRegularIcon } from "../regular/CloudFog";
import { CloudFogIcon as CloudFogThinIcon } from "../thin/CloudFog";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CloudFogThinIcon,
	light: CloudFogLightIcon,
	regular: CloudFogRegularIcon,
	bold: CloudFogBoldIcon,
	fill: CloudFogFillIcon,
	duotone: CloudFogDuotoneIcon,
} as const;

export function CloudFogIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CloudFogIcon as CloudFog };
