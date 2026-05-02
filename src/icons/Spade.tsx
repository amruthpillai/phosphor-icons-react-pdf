import { SpadeIcon as SpadeBoldIcon } from "../bold/Spade";
import { SpadeIcon as SpadeDuotoneIcon } from "../duotone/Spade";
import { SpadeIcon as SpadeFillIcon } from "../fill/Spade";
import { SpadeIcon as SpadeLightIcon } from "../light/Spade";
import { SpadeIcon as SpadeRegularIcon } from "../regular/Spade";
import { SpadeIcon as SpadeThinIcon } from "../thin/Spade";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SpadeThinIcon,
	light: SpadeLightIcon,
	regular: SpadeRegularIcon,
	bold: SpadeBoldIcon,
	fill: SpadeFillIcon,
	duotone: SpadeDuotoneIcon,
} as const;

export function SpadeIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SpadeIcon as Spade };
