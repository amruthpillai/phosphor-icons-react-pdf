import { FireExtinguisherIcon as FireExtinguisherBoldIcon } from "../bold/FireExtinguisher";
import { FireExtinguisherIcon as FireExtinguisherDuotoneIcon } from "../duotone/FireExtinguisher";
import { FireExtinguisherIcon as FireExtinguisherFillIcon } from "../fill/FireExtinguisher";
import { FireExtinguisherIcon as FireExtinguisherLightIcon } from "../light/FireExtinguisher";
import { FireExtinguisherIcon as FireExtinguisherRegularIcon } from "../regular/FireExtinguisher";
import { FireExtinguisherIcon as FireExtinguisherThinIcon } from "../thin/FireExtinguisher";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FireExtinguisherThinIcon,
	light: FireExtinguisherLightIcon,
	regular: FireExtinguisherRegularIcon,
	bold: FireExtinguisherBoldIcon,
	fill: FireExtinguisherFillIcon,
	duotone: FireExtinguisherDuotoneIcon,
} as const;

export function FireExtinguisherIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FireExtinguisherIcon as FireExtinguisher };
