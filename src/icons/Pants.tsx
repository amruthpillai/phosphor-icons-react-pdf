import { PantsIcon as PantsBoldIcon } from "../bold/Pants";
import { PantsIcon as PantsDuotoneIcon } from "../duotone/Pants";
import { PantsIcon as PantsFillIcon } from "../fill/Pants";
import { PantsIcon as PantsLightIcon } from "../light/Pants";
import { PantsIcon as PantsRegularIcon } from "../regular/Pants";
import { PantsIcon as PantsThinIcon } from "../thin/Pants";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PantsThinIcon,
	light: PantsLightIcon,
	regular: PantsRegularIcon,
	bold: PantsBoldIcon,
	fill: PantsFillIcon,
	duotone: PantsDuotoneIcon,
} as const;

export function PantsIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PantsIcon as Pants };
