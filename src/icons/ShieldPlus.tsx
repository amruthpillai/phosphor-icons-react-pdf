import { ShieldPlusIcon as ShieldPlusBoldIcon } from "../bold/ShieldPlus";
import { ShieldPlusIcon as ShieldPlusDuotoneIcon } from "../duotone/ShieldPlus";
import { ShieldPlusIcon as ShieldPlusFillIcon } from "../fill/ShieldPlus";
import { ShieldPlusIcon as ShieldPlusLightIcon } from "../light/ShieldPlus";
import { ShieldPlusIcon as ShieldPlusRegularIcon } from "../regular/ShieldPlus";
import { ShieldPlusIcon as ShieldPlusThinIcon } from "../thin/ShieldPlus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShieldPlusThinIcon,
	light: ShieldPlusLightIcon,
	regular: ShieldPlusRegularIcon,
	bold: ShieldPlusBoldIcon,
	fill: ShieldPlusFillIcon,
	duotone: ShieldPlusDuotoneIcon,
} as const;

export function ShieldPlusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShieldPlusIcon as ShieldPlus };
