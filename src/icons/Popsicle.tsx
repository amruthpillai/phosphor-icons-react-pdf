import { PopsicleIcon as PopsicleBoldIcon } from "../bold/Popsicle";
import { PopsicleIcon as PopsicleDuotoneIcon } from "../duotone/Popsicle";
import { PopsicleIcon as PopsicleFillIcon } from "../fill/Popsicle";
import { PopsicleIcon as PopsicleLightIcon } from "../light/Popsicle";
import { PopsicleIcon as PopsicleRegularIcon } from "../regular/Popsicle";
import { PopsicleIcon as PopsicleThinIcon } from "../thin/Popsicle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PopsicleThinIcon,
	light: PopsicleLightIcon,
	regular: PopsicleRegularIcon,
	bold: PopsicleBoldIcon,
	fill: PopsicleFillIcon,
	duotone: PopsicleDuotoneIcon,
} as const;

export function PopsicleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PopsicleIcon as Popsicle };
