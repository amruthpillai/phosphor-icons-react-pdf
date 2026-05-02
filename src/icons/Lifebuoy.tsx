import { LifebuoyIcon as LifebuoyBoldIcon } from "../bold/Lifebuoy";
import { LifebuoyIcon as LifebuoyDuotoneIcon } from "../duotone/Lifebuoy";
import { LifebuoyIcon as LifebuoyFillIcon } from "../fill/Lifebuoy";
import { LifebuoyIcon as LifebuoyLightIcon } from "../light/Lifebuoy";
import { LifebuoyIcon as LifebuoyRegularIcon } from "../regular/Lifebuoy";
import { LifebuoyIcon as LifebuoyThinIcon } from "../thin/Lifebuoy";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LifebuoyThinIcon,
	light: LifebuoyLightIcon,
	regular: LifebuoyRegularIcon,
	bold: LifebuoyBoldIcon,
	fill: LifebuoyFillIcon,
	duotone: LifebuoyDuotoneIcon,
} as const;

export function LifebuoyIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LifebuoyIcon as Lifebuoy };
