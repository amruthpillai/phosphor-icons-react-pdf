import { YarnIcon as YarnBoldIcon } from "../bold/Yarn";
import { YarnIcon as YarnDuotoneIcon } from "../duotone/Yarn";
import { YarnIcon as YarnFillIcon } from "../fill/Yarn";
import { YarnIcon as YarnLightIcon } from "../light/Yarn";
import { YarnIcon as YarnRegularIcon } from "../regular/Yarn";
import { YarnIcon as YarnThinIcon } from "../thin/Yarn";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: YarnThinIcon,
	light: YarnLightIcon,
	regular: YarnRegularIcon,
	bold: YarnBoldIcon,
	fill: YarnFillIcon,
	duotone: YarnDuotoneIcon,
} as const;

export function YarnIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { YarnIcon as Yarn };
