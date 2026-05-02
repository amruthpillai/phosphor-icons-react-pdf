import { CraneIcon as CraneBoldIcon } from "../bold/Crane";
import { CraneIcon as CraneDuotoneIcon } from "../duotone/Crane";
import { CraneIcon as CraneFillIcon } from "../fill/Crane";
import { CraneIcon as CraneLightIcon } from "../light/Crane";
import { CraneIcon as CraneRegularIcon } from "../regular/Crane";
import { CraneIcon as CraneThinIcon } from "../thin/Crane";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CraneThinIcon,
	light: CraneLightIcon,
	regular: CraneRegularIcon,
	bold: CraneBoldIcon,
	fill: CraneFillIcon,
	duotone: CraneDuotoneIcon,
} as const;

export function CraneIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CraneIcon as Crane };
