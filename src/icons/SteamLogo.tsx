import { SteamLogoIcon as SteamLogoBoldIcon } from "../bold/SteamLogo";
import { SteamLogoIcon as SteamLogoDuotoneIcon } from "../duotone/SteamLogo";
import { SteamLogoIcon as SteamLogoFillIcon } from "../fill/SteamLogo";
import { SteamLogoIcon as SteamLogoLightIcon } from "../light/SteamLogo";
import { SteamLogoIcon as SteamLogoRegularIcon } from "../regular/SteamLogo";
import { SteamLogoIcon as SteamLogoThinIcon } from "../thin/SteamLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SteamLogoThinIcon,
	light: SteamLogoLightIcon,
	regular: SteamLogoRegularIcon,
	bold: SteamLogoBoldIcon,
	fill: SteamLogoFillIcon,
	duotone: SteamLogoDuotoneIcon,
} as const;

export function SteamLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SteamLogoIcon as SteamLogo };
