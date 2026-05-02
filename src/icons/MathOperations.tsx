import { MathOperationsIcon as MathOperationsBoldIcon } from "../bold/MathOperations";
import { MathOperationsIcon as MathOperationsDuotoneIcon } from "../duotone/MathOperations";
import { MathOperationsIcon as MathOperationsFillIcon } from "../fill/MathOperations";
import { MathOperationsIcon as MathOperationsLightIcon } from "../light/MathOperations";
import { MathOperationsIcon as MathOperationsRegularIcon } from "../regular/MathOperations";
import { MathOperationsIcon as MathOperationsThinIcon } from "../thin/MathOperations";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MathOperationsThinIcon,
	light: MathOperationsLightIcon,
	regular: MathOperationsRegularIcon,
	bold: MathOperationsBoldIcon,
	fill: MathOperationsFillIcon,
	duotone: MathOperationsDuotoneIcon,
} as const;

export function MathOperationsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MathOperationsIcon as MathOperations };
