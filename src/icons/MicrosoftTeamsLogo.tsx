import { MicrosoftTeamsLogoIcon as MicrosoftTeamsLogoBoldIcon } from "../bold/MicrosoftTeamsLogo";
import { MicrosoftTeamsLogoIcon as MicrosoftTeamsLogoDuotoneIcon } from "../duotone/MicrosoftTeamsLogo";
import { MicrosoftTeamsLogoIcon as MicrosoftTeamsLogoFillIcon } from "../fill/MicrosoftTeamsLogo";
import { MicrosoftTeamsLogoIcon as MicrosoftTeamsLogoLightIcon } from "../light/MicrosoftTeamsLogo";
import { MicrosoftTeamsLogoIcon as MicrosoftTeamsLogoRegularIcon } from "../regular/MicrosoftTeamsLogo";
import { MicrosoftTeamsLogoIcon as MicrosoftTeamsLogoThinIcon } from "../thin/MicrosoftTeamsLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MicrosoftTeamsLogoThinIcon,
	light: MicrosoftTeamsLogoLightIcon,
	regular: MicrosoftTeamsLogoRegularIcon,
	bold: MicrosoftTeamsLogoBoldIcon,
	fill: MicrosoftTeamsLogoFillIcon,
	duotone: MicrosoftTeamsLogoDuotoneIcon,
} as const;

export function MicrosoftTeamsLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MicrosoftTeamsLogoIcon as MicrosoftTeamsLogo };
