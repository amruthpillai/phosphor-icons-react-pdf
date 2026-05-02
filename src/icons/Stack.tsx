import { StackIcon as StackBoldIcon } from "../bold/Stack";
import { StackIcon as StackDuotoneIcon } from "../duotone/Stack";
import { StackIcon as StackFillIcon } from "../fill/Stack";
import { StackIcon as StackLightIcon } from "../light/Stack";
import { StackIcon as StackRegularIcon } from "../regular/Stack";
import { StackIcon as StackThinIcon } from "../thin/Stack";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: StackThinIcon,
	light: StackLightIcon,
	regular: StackRegularIcon,
	bold: StackBoldIcon,
	fill: StackFillIcon,
	duotone: StackDuotoneIcon,
} as const;

export function StackIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { StackIcon as Stack };
