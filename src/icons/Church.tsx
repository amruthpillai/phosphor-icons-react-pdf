import { ChurchIcon as ChurchBoldIcon } from "../bold/Church";
import { ChurchIcon as ChurchDuotoneIcon } from "../duotone/Church";
import { ChurchIcon as ChurchFillIcon } from "../fill/Church";
import { ChurchIcon as ChurchLightIcon } from "../light/Church";
import { ChurchIcon as ChurchRegularIcon } from "../regular/Church";
import { ChurchIcon as ChurchThinIcon } from "../thin/Church";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChurchThinIcon,
	light: ChurchLightIcon,
	regular: ChurchRegularIcon,
	bold: ChurchBoldIcon,
	fill: ChurchFillIcon,
	duotone: ChurchDuotoneIcon,
} as const;

export function ChurchIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChurchIcon as Church };
