import { GogglesIcon as GogglesBoldIcon } from "../bold/Goggles";
import { GogglesIcon as GogglesDuotoneIcon } from "../duotone/Goggles";
import { GogglesIcon as GogglesFillIcon } from "../fill/Goggles";
import { GogglesIcon as GogglesLightIcon } from "../light/Goggles";
import { GogglesIcon as GogglesRegularIcon } from "../regular/Goggles";
import { GogglesIcon as GogglesThinIcon } from "../thin/Goggles";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GogglesThinIcon,
	light: GogglesLightIcon,
	regular: GogglesRegularIcon,
	bold: GogglesBoldIcon,
	fill: GogglesFillIcon,
	duotone: GogglesDuotoneIcon,
} as const;

export function GogglesIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GogglesIcon as Goggles };
