import { RadioIcon as RadioBoldIcon } from "../bold/Radio";
import { RadioIcon as RadioDuotoneIcon } from "../duotone/Radio";
import { RadioIcon as RadioFillIcon } from "../fill/Radio";
import { RadioIcon as RadioLightIcon } from "../light/Radio";
import { RadioIcon as RadioRegularIcon } from "../regular/Radio";
import { RadioIcon as RadioThinIcon } from "../thin/Radio";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RadioThinIcon,
	light: RadioLightIcon,
	regular: RadioRegularIcon,
	bold: RadioBoldIcon,
	fill: RadioFillIcon,
	duotone: RadioDuotoneIcon,
} as const;

export function RadioIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RadioIcon as Radio };
