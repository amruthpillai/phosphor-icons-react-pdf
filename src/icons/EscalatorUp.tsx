import { EscalatorUpIcon as EscalatorUpBoldIcon } from "../bold/EscalatorUp";
import { EscalatorUpIcon as EscalatorUpDuotoneIcon } from "../duotone/EscalatorUp";
import { EscalatorUpIcon as EscalatorUpFillIcon } from "../fill/EscalatorUp";
import { EscalatorUpIcon as EscalatorUpLightIcon } from "../light/EscalatorUp";
import { EscalatorUpIcon as EscalatorUpRegularIcon } from "../regular/EscalatorUp";
import { EscalatorUpIcon as EscalatorUpThinIcon } from "../thin/EscalatorUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EscalatorUpThinIcon,
	light: EscalatorUpLightIcon,
	regular: EscalatorUpRegularIcon,
	bold: EscalatorUpBoldIcon,
	fill: EscalatorUpFillIcon,
	duotone: EscalatorUpDuotoneIcon,
} as const;

export function EscalatorUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EscalatorUpIcon as EscalatorUp };
