import { PlusIcon as PlusBoldIcon } from "../bold/Plus";
import { PlusIcon as PlusDuotoneIcon } from "../duotone/Plus";
import { PlusIcon as PlusFillIcon } from "../fill/Plus";
import { PlusIcon as PlusLightIcon } from "../light/Plus";
import { PlusIcon as PlusRegularIcon } from "../regular/Plus";
import { PlusIcon as PlusThinIcon } from "../thin/Plus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PlusThinIcon,
	light: PlusLightIcon,
	regular: PlusRegularIcon,
	bold: PlusBoldIcon,
	fill: PlusFillIcon,
	duotone: PlusDuotoneIcon,
} as const;

export function PlusIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PlusIcon as Plus };
