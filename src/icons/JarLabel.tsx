import { JarLabelIcon as JarLabelBoldIcon } from "../bold/JarLabel";
import { JarLabelIcon as JarLabelDuotoneIcon } from "../duotone/JarLabel";
import { JarLabelIcon as JarLabelFillIcon } from "../fill/JarLabel";
import { JarLabelIcon as JarLabelLightIcon } from "../light/JarLabel";
import { JarLabelIcon as JarLabelRegularIcon } from "../regular/JarLabel";
import { JarLabelIcon as JarLabelThinIcon } from "../thin/JarLabel";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: JarLabelThinIcon,
	light: JarLabelLightIcon,
	regular: JarLabelRegularIcon,
	bold: JarLabelBoldIcon,
	fill: JarLabelFillIcon,
	duotone: JarLabelDuotoneIcon,
} as const;

export function JarLabelIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { JarLabelIcon as JarLabel };
