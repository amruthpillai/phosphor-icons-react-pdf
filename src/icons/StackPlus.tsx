import { StackPlusIcon as StackPlusBoldIcon } from "../bold/StackPlus";
import { StackPlusIcon as StackPlusDuotoneIcon } from "../duotone/StackPlus";
import { StackPlusIcon as StackPlusFillIcon } from "../fill/StackPlus";
import { StackPlusIcon as StackPlusLightIcon } from "../light/StackPlus";
import { StackPlusIcon as StackPlusRegularIcon } from "../regular/StackPlus";
import { StackPlusIcon as StackPlusThinIcon } from "../thin/StackPlus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: StackPlusThinIcon,
	light: StackPlusLightIcon,
	regular: StackPlusRegularIcon,
	bold: StackPlusBoldIcon,
	fill: StackPlusFillIcon,
	duotone: StackPlusDuotoneIcon,
} as const;

export function StackPlusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { StackPlusIcon as StackPlus };
