import { ScrollIcon as ScrollBoldIcon } from "../bold/Scroll";
import { ScrollIcon as ScrollDuotoneIcon } from "../duotone/Scroll";
import { ScrollIcon as ScrollFillIcon } from "../fill/Scroll";
import { ScrollIcon as ScrollLightIcon } from "../light/Scroll";
import { ScrollIcon as ScrollRegularIcon } from "../regular/Scroll";
import { ScrollIcon as ScrollThinIcon } from "../thin/Scroll";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ScrollThinIcon,
	light: ScrollLightIcon,
	regular: ScrollRegularIcon,
	bold: ScrollBoldIcon,
	fill: ScrollFillIcon,
	duotone: ScrollDuotoneIcon,
} as const;

export function ScrollIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ScrollIcon as Scroll };
