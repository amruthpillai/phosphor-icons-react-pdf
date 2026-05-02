import { YinYangIcon as YinYangBoldIcon } from "../bold/YinYang";
import { YinYangIcon as YinYangDuotoneIcon } from "../duotone/YinYang";
import { YinYangIcon as YinYangFillIcon } from "../fill/YinYang";
import { YinYangIcon as YinYangLightIcon } from "../light/YinYang";
import { YinYangIcon as YinYangRegularIcon } from "../regular/YinYang";
import { YinYangIcon as YinYangThinIcon } from "../thin/YinYang";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: YinYangThinIcon,
	light: YinYangLightIcon,
	regular: YinYangRegularIcon,
	bold: YinYangBoldIcon,
	fill: YinYangFillIcon,
	duotone: YinYangDuotoneIcon,
} as const;

export function YinYangIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { YinYangIcon as YinYang };
