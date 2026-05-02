import { FediverseLogoIcon as FediverseLogoBoldIcon } from "../bold/FediverseLogo";
import { FediverseLogoIcon as FediverseLogoDuotoneIcon } from "../duotone/FediverseLogo";
import { FediverseLogoIcon as FediverseLogoFillIcon } from "../fill/FediverseLogo";
import { FediverseLogoIcon as FediverseLogoLightIcon } from "../light/FediverseLogo";
import { FediverseLogoIcon as FediverseLogoRegularIcon } from "../regular/FediverseLogo";
import { FediverseLogoIcon as FediverseLogoThinIcon } from "../thin/FediverseLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FediverseLogoThinIcon,
	light: FediverseLogoLightIcon,
	regular: FediverseLogoRegularIcon,
	bold: FediverseLogoBoldIcon,
	fill: FediverseLogoFillIcon,
	duotone: FediverseLogoDuotoneIcon,
} as const;

export function FediverseLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FediverseLogoIcon as FediverseLogo };
