import { BinocularsIcon as BinocularsBoldIcon } from "../bold/Binoculars";
import { BinocularsIcon as BinocularsDuotoneIcon } from "../duotone/Binoculars";
import { BinocularsIcon as BinocularsFillIcon } from "../fill/Binoculars";
import { BinocularsIcon as BinocularsLightIcon } from "../light/Binoculars";
import { BinocularsIcon as BinocularsRegularIcon } from "../regular/Binoculars";
import { BinocularsIcon as BinocularsThinIcon } from "../thin/Binoculars";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BinocularsThinIcon,
	light: BinocularsLightIcon,
	regular: BinocularsRegularIcon,
	bold: BinocularsBoldIcon,
	fill: BinocularsFillIcon,
	duotone: BinocularsDuotoneIcon,
} as const;

export function BinocularsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BinocularsIcon as Binoculars };
