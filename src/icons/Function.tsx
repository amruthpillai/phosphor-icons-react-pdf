import { FunctionIcon as FunctionBoldIcon } from "../bold/Function";
import { FunctionIcon as FunctionDuotoneIcon } from "../duotone/Function";
import { FunctionIcon as FunctionFillIcon } from "../fill/Function";
import { FunctionIcon as FunctionLightIcon } from "../light/Function";
import { FunctionIcon as FunctionRegularIcon } from "../regular/Function";
import { FunctionIcon as FunctionThinIcon } from "../thin/Function";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FunctionThinIcon,
	light: FunctionLightIcon,
	regular: FunctionRegularIcon,
	bold: FunctionBoldIcon,
	fill: FunctionFillIcon,
	duotone: FunctionDuotoneIcon,
} as const;

export function FunctionIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FunctionIcon as Function };
