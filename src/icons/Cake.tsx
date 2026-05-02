import { CakeIcon as CakeBoldIcon } from "../bold/Cake";
import { CakeIcon as CakeDuotoneIcon } from "../duotone/Cake";
import { CakeIcon as CakeFillIcon } from "../fill/Cake";
import { CakeIcon as CakeLightIcon } from "../light/Cake";
import { CakeIcon as CakeRegularIcon } from "../regular/Cake";
import { CakeIcon as CakeThinIcon } from "../thin/Cake";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CakeThinIcon,
	light: CakeLightIcon,
	regular: CakeRegularIcon,
	bold: CakeBoldIcon,
	fill: CakeFillIcon,
	duotone: CakeDuotoneIcon,
} as const;

export function CakeIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CakeIcon as Cake };
