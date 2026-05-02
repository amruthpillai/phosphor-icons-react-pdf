import { MicrosoftWordLogoIcon as MicrosoftWordLogoBoldIcon } from "../bold/MicrosoftWordLogo";
import { MicrosoftWordLogoIcon as MicrosoftWordLogoDuotoneIcon } from "../duotone/MicrosoftWordLogo";
import { MicrosoftWordLogoIcon as MicrosoftWordLogoFillIcon } from "../fill/MicrosoftWordLogo";
import { MicrosoftWordLogoIcon as MicrosoftWordLogoLightIcon } from "../light/MicrosoftWordLogo";
import { MicrosoftWordLogoIcon as MicrosoftWordLogoRegularIcon } from "../regular/MicrosoftWordLogo";
import { MicrosoftWordLogoIcon as MicrosoftWordLogoThinIcon } from "../thin/MicrosoftWordLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MicrosoftWordLogoThinIcon,
	light: MicrosoftWordLogoLightIcon,
	regular: MicrosoftWordLogoRegularIcon,
	bold: MicrosoftWordLogoBoldIcon,
	fill: MicrosoftWordLogoFillIcon,
	duotone: MicrosoftWordLogoDuotoneIcon,
} as const;

export function MicrosoftWordLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MicrosoftWordLogoIcon as MicrosoftWordLogo };
