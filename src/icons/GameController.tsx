import { GameControllerIcon as GameControllerBoldIcon } from "../bold/GameController";
import { GameControllerIcon as GameControllerDuotoneIcon } from "../duotone/GameController";
import { GameControllerIcon as GameControllerFillIcon } from "../fill/GameController";
import { GameControllerIcon as GameControllerLightIcon } from "../light/GameController";
import { GameControllerIcon as GameControllerRegularIcon } from "../regular/GameController";
import { GameControllerIcon as GameControllerThinIcon } from "../thin/GameController";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GameControllerThinIcon,
	light: GameControllerLightIcon,
	regular: GameControllerRegularIcon,
	bold: GameControllerBoldIcon,
	fill: GameControllerFillIcon,
	duotone: GameControllerDuotoneIcon,
} as const;

export function GameControllerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GameControllerIcon as GameController };
