import { FeatherIcon as FeatherBoldIcon } from "../bold/Feather";
import { FeatherIcon as FeatherDuotoneIcon } from "../duotone/Feather";
import { FeatherIcon as FeatherFillIcon } from "../fill/Feather";
import { FeatherIcon as FeatherLightIcon } from "../light/Feather";
import { FeatherIcon as FeatherRegularIcon } from "../regular/Feather";
import { FeatherIcon as FeatherThinIcon } from "../thin/Feather";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FeatherThinIcon,
	light: FeatherLightIcon,
	regular: FeatherRegularIcon,
	bold: FeatherBoldIcon,
	fill: FeatherFillIcon,
	duotone: FeatherDuotoneIcon,
} as const;

export function FeatherIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FeatherIcon as Feather };
