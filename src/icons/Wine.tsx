import { WineIcon as WineBoldIcon } from "../bold/Wine";
import { WineIcon as WineDuotoneIcon } from "../duotone/Wine";
import { WineIcon as WineFillIcon } from "../fill/Wine";
import { WineIcon as WineLightIcon } from "../light/Wine";
import { WineIcon as WineRegularIcon } from "../regular/Wine";
import { WineIcon as WineThinIcon } from "../thin/Wine";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WineThinIcon,
	light: WineLightIcon,
	regular: WineRegularIcon,
	bold: WineBoldIcon,
	fill: WineFillIcon,
	duotone: WineDuotoneIcon,
} as const;

export function WineIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WineIcon as Wine };
