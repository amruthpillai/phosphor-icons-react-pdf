import { BombIcon as BombBoldIcon } from "../bold/Bomb";
import { BombIcon as BombDuotoneIcon } from "../duotone/Bomb";
import { BombIcon as BombFillIcon } from "../fill/Bomb";
import { BombIcon as BombLightIcon } from "../light/Bomb";
import { BombIcon as BombRegularIcon } from "../regular/Bomb";
import { BombIcon as BombThinIcon } from "../thin/Bomb";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BombThinIcon,
	light: BombLightIcon,
	regular: BombRegularIcon,
	bold: BombBoldIcon,
	fill: BombFillIcon,
	duotone: BombDuotoneIcon,
} as const;

export function BombIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BombIcon as Bomb };
