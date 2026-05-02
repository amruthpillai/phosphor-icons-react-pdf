import { CopyrightIcon as CopyrightBoldIcon } from "../bold/Copyright";
import { CopyrightIcon as CopyrightDuotoneIcon } from "../duotone/Copyright";
import { CopyrightIcon as CopyrightFillIcon } from "../fill/Copyright";
import { CopyrightIcon as CopyrightLightIcon } from "../light/Copyright";
import { CopyrightIcon as CopyrightRegularIcon } from "../regular/Copyright";
import { CopyrightIcon as CopyrightThinIcon } from "../thin/Copyright";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CopyrightThinIcon,
	light: CopyrightLightIcon,
	regular: CopyrightRegularIcon,
	bold: CopyrightBoldIcon,
	fill: CopyrightFillIcon,
	duotone: CopyrightDuotoneIcon,
} as const;

export function CopyrightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CopyrightIcon as Copyright };
