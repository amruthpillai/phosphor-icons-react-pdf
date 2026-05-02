import { DogIcon as DogBoldIcon } from "../bold/Dog";
import { DogIcon as DogDuotoneIcon } from "../duotone/Dog";
import { DogIcon as DogFillIcon } from "../fill/Dog";
import { DogIcon as DogLightIcon } from "../light/Dog";
import { DogIcon as DogRegularIcon } from "../regular/Dog";
import { DogIcon as DogThinIcon } from "../thin/Dog";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DogThinIcon,
	light: DogLightIcon,
	regular: DogRegularIcon,
	bold: DogBoldIcon,
	fill: DogFillIcon,
	duotone: DogDuotoneIcon,
} as const;

export function DogIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DogIcon as Dog };
