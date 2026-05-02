import { FactoryIcon as FactoryBoldIcon } from "../bold/Factory";
import { FactoryIcon as FactoryDuotoneIcon } from "../duotone/Factory";
import { FactoryIcon as FactoryFillIcon } from "../fill/Factory";
import { FactoryIcon as FactoryLightIcon } from "../light/Factory";
import { FactoryIcon as FactoryRegularIcon } from "../regular/Factory";
import { FactoryIcon as FactoryThinIcon } from "../thin/Factory";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FactoryThinIcon,
	light: FactoryLightIcon,
	regular: FactoryRegularIcon,
	bold: FactoryBoldIcon,
	fill: FactoryFillIcon,
	duotone: FactoryDuotoneIcon,
} as const;

export function FactoryIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FactoryIcon as Factory };
