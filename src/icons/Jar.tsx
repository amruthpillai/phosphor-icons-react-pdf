import { JarIcon as JarBoldIcon } from "../bold/Jar";
import { JarIcon as JarDuotoneIcon } from "../duotone/Jar";
import { JarIcon as JarFillIcon } from "../fill/Jar";
import { JarIcon as JarLightIcon } from "../light/Jar";
import { JarIcon as JarRegularIcon } from "../regular/Jar";
import { JarIcon as JarThinIcon } from "../thin/Jar";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: JarThinIcon,
	light: JarLightIcon,
	regular: JarRegularIcon,
	bold: JarBoldIcon,
	fill: JarFillIcon,
	duotone: JarDuotoneIcon,
} as const;

export function JarIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { JarIcon as Jar };
