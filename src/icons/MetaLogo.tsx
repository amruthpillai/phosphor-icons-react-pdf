import { MetaLogoIcon as MetaLogoBoldIcon } from "../bold/MetaLogo";
import { MetaLogoIcon as MetaLogoDuotoneIcon } from "../duotone/MetaLogo";
import { MetaLogoIcon as MetaLogoFillIcon } from "../fill/MetaLogo";
import { MetaLogoIcon as MetaLogoLightIcon } from "../light/MetaLogo";
import { MetaLogoIcon as MetaLogoRegularIcon } from "../regular/MetaLogo";
import { MetaLogoIcon as MetaLogoThinIcon } from "../thin/MetaLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MetaLogoThinIcon,
	light: MetaLogoLightIcon,
	regular: MetaLogoRegularIcon,
	bold: MetaLogoBoldIcon,
	fill: MetaLogoFillIcon,
	duotone: MetaLogoDuotoneIcon,
} as const;

export function MetaLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MetaLogoIcon as MetaLogo };
