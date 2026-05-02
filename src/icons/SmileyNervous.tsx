import { SmileyNervousIcon as SmileyNervousBoldIcon } from "../bold/SmileyNervous";
import { SmileyNervousIcon as SmileyNervousDuotoneIcon } from "../duotone/SmileyNervous";
import { SmileyNervousIcon as SmileyNervousFillIcon } from "../fill/SmileyNervous";
import { SmileyNervousIcon as SmileyNervousLightIcon } from "../light/SmileyNervous";
import { SmileyNervousIcon as SmileyNervousRegularIcon } from "../regular/SmileyNervous";
import { SmileyNervousIcon as SmileyNervousThinIcon } from "../thin/SmileyNervous";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SmileyNervousThinIcon,
	light: SmileyNervousLightIcon,
	regular: SmileyNervousRegularIcon,
	bold: SmileyNervousBoldIcon,
	fill: SmileyNervousFillIcon,
	duotone: SmileyNervousDuotoneIcon,
} as const;

export function SmileyNervousIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SmileyNervousIcon as SmileyNervous };
