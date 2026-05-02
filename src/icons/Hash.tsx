import { HashIcon as HashBoldIcon } from "../bold/Hash";
import { HashIcon as HashDuotoneIcon } from "../duotone/Hash";
import { HashIcon as HashFillIcon } from "../fill/Hash";
import { HashIcon as HashLightIcon } from "../light/Hash";
import { HashIcon as HashRegularIcon } from "../regular/Hash";
import { HashIcon as HashThinIcon } from "../thin/Hash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HashThinIcon,
	light: HashLightIcon,
	regular: HashRegularIcon,
	bold: HashBoldIcon,
	fill: HashFillIcon,
	duotone: HashDuotoneIcon,
} as const;

export function HashIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HashIcon as Hash };
