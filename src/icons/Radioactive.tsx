import { RadioactiveIcon as RadioactiveBoldIcon } from "../bold/Radioactive";
import { RadioactiveIcon as RadioactiveDuotoneIcon } from "../duotone/Radioactive";
import { RadioactiveIcon as RadioactiveFillIcon } from "../fill/Radioactive";
import { RadioactiveIcon as RadioactiveLightIcon } from "../light/Radioactive";
import { RadioactiveIcon as RadioactiveRegularIcon } from "../regular/Radioactive";
import { RadioactiveIcon as RadioactiveThinIcon } from "../thin/Radioactive";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RadioactiveThinIcon,
	light: RadioactiveLightIcon,
	regular: RadioactiveRegularIcon,
	bold: RadioactiveBoldIcon,
	fill: RadioactiveFillIcon,
	duotone: RadioactiveDuotoneIcon,
} as const;

export function RadioactiveIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RadioactiveIcon as Radioactive };
