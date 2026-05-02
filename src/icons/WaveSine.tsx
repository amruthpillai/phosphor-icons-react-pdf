import { WaveSineIcon as WaveSineBoldIcon } from "../bold/WaveSine";
import { WaveSineIcon as WaveSineDuotoneIcon } from "../duotone/WaveSine";
import { WaveSineIcon as WaveSineFillIcon } from "../fill/WaveSine";
import { WaveSineIcon as WaveSineLightIcon } from "../light/WaveSine";
import { WaveSineIcon as WaveSineRegularIcon } from "../regular/WaveSine";
import { WaveSineIcon as WaveSineThinIcon } from "../thin/WaveSine";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WaveSineThinIcon,
	light: WaveSineLightIcon,
	regular: WaveSineRegularIcon,
	bold: WaveSineBoldIcon,
	fill: WaveSineFillIcon,
	duotone: WaveSineDuotoneIcon,
} as const;

export function WaveSineIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WaveSineIcon as WaveSine };
