import { TelegramLogoIcon as TelegramLogoBoldIcon } from "../bold/TelegramLogo";
import { TelegramLogoIcon as TelegramLogoDuotoneIcon } from "../duotone/TelegramLogo";
import { TelegramLogoIcon as TelegramLogoFillIcon } from "../fill/TelegramLogo";
import { TelegramLogoIcon as TelegramLogoLightIcon } from "../light/TelegramLogo";
import { TelegramLogoIcon as TelegramLogoRegularIcon } from "../regular/TelegramLogo";
import { TelegramLogoIcon as TelegramLogoThinIcon } from "../thin/TelegramLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TelegramLogoThinIcon,
	light: TelegramLogoLightIcon,
	regular: TelegramLogoRegularIcon,
	bold: TelegramLogoBoldIcon,
	fill: TelegramLogoFillIcon,
	duotone: TelegramLogoDuotoneIcon,
} as const;

export function TelegramLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TelegramLogoIcon as TelegramLogo };
