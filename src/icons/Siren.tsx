import { SirenIcon as SirenBoldIcon } from "../bold/Siren";
import { SirenIcon as SirenDuotoneIcon } from "../duotone/Siren";
import { SirenIcon as SirenFillIcon } from "../fill/Siren";
import { SirenIcon as SirenLightIcon } from "../light/Siren";
import { SirenIcon as SirenRegularIcon } from "../regular/Siren";
import { SirenIcon as SirenThinIcon } from "../thin/Siren";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SirenThinIcon,
	light: SirenLightIcon,
	regular: SirenRegularIcon,
	bold: SirenBoldIcon,
	fill: SirenFillIcon,
	duotone: SirenDuotoneIcon,
} as const;

export function SirenIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SirenIcon as Siren };
