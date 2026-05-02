import { CodaLogoIcon as CodaLogoBoldIcon } from "../bold/CodaLogo";
import { CodaLogoIcon as CodaLogoDuotoneIcon } from "../duotone/CodaLogo";
import { CodaLogoIcon as CodaLogoFillIcon } from "../fill/CodaLogo";
import { CodaLogoIcon as CodaLogoLightIcon } from "../light/CodaLogo";
import { CodaLogoIcon as CodaLogoRegularIcon } from "../regular/CodaLogo";
import { CodaLogoIcon as CodaLogoThinIcon } from "../thin/CodaLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CodaLogoThinIcon,
	light: CodaLogoLightIcon,
	regular: CodaLogoRegularIcon,
	bold: CodaLogoBoldIcon,
	fill: CodaLogoFillIcon,
	duotone: CodaLogoDuotoneIcon,
} as const;

export function CodaLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CodaLogoIcon as CodaLogo };
