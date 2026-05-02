import { UniteIcon as UniteBoldIcon } from "../bold/Unite";
import { UniteIcon as UniteDuotoneIcon } from "../duotone/Unite";
import { UniteIcon as UniteFillIcon } from "../fill/Unite";
import { UniteIcon as UniteLightIcon } from "../light/Unite";
import { UniteIcon as UniteRegularIcon } from "../regular/Unite";
import { UniteIcon as UniteThinIcon } from "../thin/Unite";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UniteThinIcon,
	light: UniteLightIcon,
	regular: UniteRegularIcon,
	bold: UniteBoldIcon,
	fill: UniteFillIcon,
	duotone: UniteDuotoneIcon,
} as const;

export function UniteIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UniteIcon as Unite };
