import { CactusIcon as CactusBoldIcon } from "../bold/Cactus";
import { CactusIcon as CactusDuotoneIcon } from "../duotone/Cactus";
import { CactusIcon as CactusFillIcon } from "../fill/Cactus";
import { CactusIcon as CactusLightIcon } from "../light/Cactus";
import { CactusIcon as CactusRegularIcon } from "../regular/Cactus";
import { CactusIcon as CactusThinIcon } from "../thin/Cactus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CactusThinIcon,
	light: CactusLightIcon,
	regular: CactusRegularIcon,
	bold: CactusBoldIcon,
	fill: CactusFillIcon,
	duotone: CactusDuotoneIcon,
} as const;

export function CactusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CactusIcon as Cactus };
