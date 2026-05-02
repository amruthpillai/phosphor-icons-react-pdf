import { MessengerLogoIcon as MessengerLogoBoldIcon } from "../bold/MessengerLogo";
import { MessengerLogoIcon as MessengerLogoDuotoneIcon } from "../duotone/MessengerLogo";
import { MessengerLogoIcon as MessengerLogoFillIcon } from "../fill/MessengerLogo";
import { MessengerLogoIcon as MessengerLogoLightIcon } from "../light/MessengerLogo";
import { MessengerLogoIcon as MessengerLogoRegularIcon } from "../regular/MessengerLogo";
import { MessengerLogoIcon as MessengerLogoThinIcon } from "../thin/MessengerLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MessengerLogoThinIcon,
	light: MessengerLogoLightIcon,
	regular: MessengerLogoRegularIcon,
	bold: MessengerLogoBoldIcon,
	fill: MessengerLogoFillIcon,
	duotone: MessengerLogoDuotoneIcon,
} as const;

export function MessengerLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MessengerLogoIcon as MessengerLogo };
