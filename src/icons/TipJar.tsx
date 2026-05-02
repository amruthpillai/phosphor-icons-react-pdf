import { TipJarIcon as TipJarBoldIcon } from "../bold/TipJar";
import { TipJarIcon as TipJarDuotoneIcon } from "../duotone/TipJar";
import { TipJarIcon as TipJarFillIcon } from "../fill/TipJar";
import { TipJarIcon as TipJarLightIcon } from "../light/TipJar";
import { TipJarIcon as TipJarRegularIcon } from "../regular/TipJar";
import { TipJarIcon as TipJarThinIcon } from "../thin/TipJar";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TipJarThinIcon,
	light: TipJarLightIcon,
	regular: TipJarRegularIcon,
	bold: TipJarBoldIcon,
	fill: TipJarFillIcon,
	duotone: TipJarDuotoneIcon,
} as const;

export function TipJarIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TipJarIcon as TipJar };
