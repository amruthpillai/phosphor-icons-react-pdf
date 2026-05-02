import { AlienIcon as AlienBoldIcon } from "../bold/Alien";
import { AlienIcon as AlienDuotoneIcon } from "../duotone/Alien";
import { AlienIcon as AlienFillIcon } from "../fill/Alien";
import { AlienIcon as AlienLightIcon } from "../light/Alien";
import { AlienIcon as AlienRegularIcon } from "../regular/Alien";
import { AlienIcon as AlienThinIcon } from "../thin/Alien";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AlienThinIcon,
	light: AlienLightIcon,
	regular: AlienRegularIcon,
	bold: AlienBoldIcon,
	fill: AlienFillIcon,
	duotone: AlienDuotoneIcon,
} as const;

export function AlienIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AlienIcon as Alien };
