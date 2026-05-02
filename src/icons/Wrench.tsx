import { WrenchIcon as WrenchBoldIcon } from "../bold/Wrench";
import { WrenchIcon as WrenchDuotoneIcon } from "../duotone/Wrench";
import { WrenchIcon as WrenchFillIcon } from "../fill/Wrench";
import { WrenchIcon as WrenchLightIcon } from "../light/Wrench";
import { WrenchIcon as WrenchRegularIcon } from "../regular/Wrench";
import { WrenchIcon as WrenchThinIcon } from "../thin/Wrench";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WrenchThinIcon,
	light: WrenchLightIcon,
	regular: WrenchRegularIcon,
	bold: WrenchBoldIcon,
	fill: WrenchFillIcon,
	duotone: WrenchDuotoneIcon,
} as const;

export function WrenchIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WrenchIcon as Wrench };
