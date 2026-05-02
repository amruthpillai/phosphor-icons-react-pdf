import { TextAaIcon as TextAaBoldIcon } from "../bold/TextAa";
import { TextAaIcon as TextAaDuotoneIcon } from "../duotone/TextAa";
import { TextAaIcon as TextAaFillIcon } from "../fill/TextAa";
import { TextAaIcon as TextAaLightIcon } from "../light/TextAa";
import { TextAaIcon as TextAaRegularIcon } from "../regular/TextAa";
import { TextAaIcon as TextAaThinIcon } from "../thin/TextAa";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextAaThinIcon,
	light: TextAaLightIcon,
	regular: TextAaRegularIcon,
	bold: TextAaBoldIcon,
	fill: TextAaFillIcon,
	duotone: TextAaDuotoneIcon,
} as const;

export function TextAaIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextAaIcon as TextAa };
