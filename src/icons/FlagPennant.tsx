import { FlagPennantIcon as FlagPennantBoldIcon } from "../bold/FlagPennant";
import { FlagPennantIcon as FlagPennantDuotoneIcon } from "../duotone/FlagPennant";
import { FlagPennantIcon as FlagPennantFillIcon } from "../fill/FlagPennant";
import { FlagPennantIcon as FlagPennantLightIcon } from "../light/FlagPennant";
import { FlagPennantIcon as FlagPennantRegularIcon } from "../regular/FlagPennant";
import { FlagPennantIcon as FlagPennantThinIcon } from "../thin/FlagPennant";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FlagPennantThinIcon,
	light: FlagPennantLightIcon,
	regular: FlagPennantRegularIcon,
	bold: FlagPennantBoldIcon,
	fill: FlagPennantFillIcon,
	duotone: FlagPennantDuotoneIcon,
} as const;

export function FlagPennantIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FlagPennantIcon as FlagPennant };
