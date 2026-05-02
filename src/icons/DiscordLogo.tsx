import { DiscordLogoIcon as DiscordLogoBoldIcon } from "../bold/DiscordLogo";
import { DiscordLogoIcon as DiscordLogoDuotoneIcon } from "../duotone/DiscordLogo";
import { DiscordLogoIcon as DiscordLogoFillIcon } from "../fill/DiscordLogo";
import { DiscordLogoIcon as DiscordLogoLightIcon } from "../light/DiscordLogo";
import { DiscordLogoIcon as DiscordLogoRegularIcon } from "../regular/DiscordLogo";
import { DiscordLogoIcon as DiscordLogoThinIcon } from "../thin/DiscordLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DiscordLogoThinIcon,
	light: DiscordLogoLightIcon,
	regular: DiscordLogoRegularIcon,
	bold: DiscordLogoBoldIcon,
	fill: DiscordLogoFillIcon,
	duotone: DiscordLogoDuotoneIcon,
} as const;

export function DiscordLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DiscordLogoIcon as DiscordLogo };
