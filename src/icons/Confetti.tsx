import { ConfettiIcon as ConfettiBoldIcon } from "../bold/Confetti";
import { ConfettiIcon as ConfettiDuotoneIcon } from "../duotone/Confetti";
import { ConfettiIcon as ConfettiFillIcon } from "../fill/Confetti";
import { ConfettiIcon as ConfettiLightIcon } from "../light/Confetti";
import { ConfettiIcon as ConfettiRegularIcon } from "../regular/Confetti";
import { ConfettiIcon as ConfettiThinIcon } from "../thin/Confetti";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ConfettiThinIcon,
	light: ConfettiLightIcon,
	regular: ConfettiRegularIcon,
	bold: ConfettiBoldIcon,
	fill: ConfettiFillIcon,
	duotone: ConfettiDuotoneIcon,
} as const;

export function ConfettiIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ConfettiIcon as Confetti };
