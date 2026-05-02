import { TornadoIcon as TornadoBoldIcon } from "../bold/Tornado";
import { TornadoIcon as TornadoDuotoneIcon } from "../duotone/Tornado";
import { TornadoIcon as TornadoFillIcon } from "../fill/Tornado";
import { TornadoIcon as TornadoLightIcon } from "../light/Tornado";
import { TornadoIcon as TornadoRegularIcon } from "../regular/Tornado";
import { TornadoIcon as TornadoThinIcon } from "../thin/Tornado";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TornadoThinIcon,
	light: TornadoLightIcon,
	regular: TornadoRegularIcon,
	bold: TornadoBoldIcon,
	fill: TornadoFillIcon,
	duotone: TornadoDuotoneIcon,
} as const;

export function TornadoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TornadoIcon as Tornado };
