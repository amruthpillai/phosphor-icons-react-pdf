import { CalculatorIcon as CalculatorBoldIcon } from "../bold/Calculator";
import { CalculatorIcon as CalculatorDuotoneIcon } from "../duotone/Calculator";
import { CalculatorIcon as CalculatorFillIcon } from "../fill/Calculator";
import { CalculatorIcon as CalculatorLightIcon } from "../light/Calculator";
import { CalculatorIcon as CalculatorRegularIcon } from "../regular/Calculator";
import { CalculatorIcon as CalculatorThinIcon } from "../thin/Calculator";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CalculatorThinIcon,
	light: CalculatorLightIcon,
	regular: CalculatorRegularIcon,
	bold: CalculatorBoldIcon,
	fill: CalculatorFillIcon,
	duotone: CalculatorDuotoneIcon,
} as const;

export function CalculatorIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CalculatorIcon as Calculator };
