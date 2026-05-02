import { HamburgerIcon as HamburgerBoldIcon } from "../bold/Hamburger";
import { HamburgerIcon as HamburgerDuotoneIcon } from "../duotone/Hamburger";
import { HamburgerIcon as HamburgerFillIcon } from "../fill/Hamburger";
import { HamburgerIcon as HamburgerLightIcon } from "../light/Hamburger";
import { HamburgerIcon as HamburgerRegularIcon } from "../regular/Hamburger";
import { HamburgerIcon as HamburgerThinIcon } from "../thin/Hamburger";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HamburgerThinIcon,
	light: HamburgerLightIcon,
	regular: HamburgerRegularIcon,
	bold: HamburgerBoldIcon,
	fill: HamburgerFillIcon,
	duotone: HamburgerDuotoneIcon,
} as const;

export function HamburgerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HamburgerIcon as Hamburger };
