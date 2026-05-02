import { EmptyIcon as EmptyBoldIcon } from "../bold/Empty";
import { EmptyIcon as EmptyDuotoneIcon } from "../duotone/Empty";
import { EmptyIcon as EmptyFillIcon } from "../fill/Empty";
import { EmptyIcon as EmptyLightIcon } from "../light/Empty";
import { EmptyIcon as EmptyRegularIcon } from "../regular/Empty";
import { EmptyIcon as EmptyThinIcon } from "../thin/Empty";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EmptyThinIcon,
	light: EmptyLightIcon,
	regular: EmptyRegularIcon,
	bold: EmptyBoldIcon,
	fill: EmptyFillIcon,
	duotone: EmptyDuotoneIcon,
} as const;

export function EmptyIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EmptyIcon as Empty };
