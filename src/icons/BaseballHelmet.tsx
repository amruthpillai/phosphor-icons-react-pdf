import { BaseballHelmetIcon as BaseballHelmetBoldIcon } from "../bold/BaseballHelmet";
import { BaseballHelmetIcon as BaseballHelmetDuotoneIcon } from "../duotone/BaseballHelmet";
import { BaseballHelmetIcon as BaseballHelmetFillIcon } from "../fill/BaseballHelmet";
import { BaseballHelmetIcon as BaseballHelmetLightIcon } from "../light/BaseballHelmet";
import { BaseballHelmetIcon as BaseballHelmetRegularIcon } from "../regular/BaseballHelmet";
import { BaseballHelmetIcon as BaseballHelmetThinIcon } from "../thin/BaseballHelmet";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BaseballHelmetThinIcon,
	light: BaseballHelmetLightIcon,
	regular: BaseballHelmetRegularIcon,
	bold: BaseballHelmetBoldIcon,
	fill: BaseballHelmetFillIcon,
	duotone: BaseballHelmetDuotoneIcon,
} as const;

export function BaseballHelmetIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BaseballHelmetIcon as BaseballHelmet };
