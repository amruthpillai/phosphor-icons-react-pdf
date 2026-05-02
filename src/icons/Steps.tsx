import { StepsIcon as StepsBoldIcon } from "../bold/Steps";
import { StepsIcon as StepsDuotoneIcon } from "../duotone/Steps";
import { StepsIcon as StepsFillIcon } from "../fill/Steps";
import { StepsIcon as StepsLightIcon } from "../light/Steps";
import { StepsIcon as StepsRegularIcon } from "../regular/Steps";
import { StepsIcon as StepsThinIcon } from "../thin/Steps";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: StepsThinIcon,
	light: StepsLightIcon,
	regular: StepsRegularIcon,
	bold: StepsBoldIcon,
	fill: StepsFillIcon,
	duotone: StepsDuotoneIcon,
} as const;

export function StepsIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { StepsIcon as Steps };
