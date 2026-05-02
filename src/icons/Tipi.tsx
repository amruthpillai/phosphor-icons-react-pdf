import { TipiIcon as TipiBoldIcon } from "../bold/Tipi";
import { TipiIcon as TipiDuotoneIcon } from "../duotone/Tipi";
import { TipiIcon as TipiFillIcon } from "../fill/Tipi";
import { TipiIcon as TipiLightIcon } from "../light/Tipi";
import { TipiIcon as TipiRegularIcon } from "../regular/Tipi";
import { TipiIcon as TipiThinIcon } from "../thin/Tipi";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TipiThinIcon,
	light: TipiLightIcon,
	regular: TipiRegularIcon,
	bold: TipiBoldIcon,
	fill: TipiFillIcon,
	duotone: TipiDuotoneIcon,
} as const;

export function TipiIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TipiIcon as Tipi };
