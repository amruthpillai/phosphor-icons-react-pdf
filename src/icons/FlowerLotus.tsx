import { FlowerLotusIcon as FlowerLotusBoldIcon } from "../bold/FlowerLotus";
import { FlowerLotusIcon as FlowerLotusDuotoneIcon } from "../duotone/FlowerLotus";
import { FlowerLotusIcon as FlowerLotusFillIcon } from "../fill/FlowerLotus";
import { FlowerLotusIcon as FlowerLotusLightIcon } from "../light/FlowerLotus";
import { FlowerLotusIcon as FlowerLotusRegularIcon } from "../regular/FlowerLotus";
import { FlowerLotusIcon as FlowerLotusThinIcon } from "../thin/FlowerLotus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FlowerLotusThinIcon,
	light: FlowerLotusLightIcon,
	regular: FlowerLotusRegularIcon,
	bold: FlowerLotusBoldIcon,
	fill: FlowerLotusFillIcon,
	duotone: FlowerLotusDuotoneIcon,
} as const;

export function FlowerLotusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FlowerLotusIcon as FlowerLotus };
