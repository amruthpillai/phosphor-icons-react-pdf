import { TextHIcon as TextHBoldIcon } from "../bold/TextH";
import { TextHIcon as TextHDuotoneIcon } from "../duotone/TextH";
import { TextHIcon as TextHFillIcon } from "../fill/TextH";
import { TextHIcon as TextHLightIcon } from "../light/TextH";
import { TextHIcon as TextHRegularIcon } from "../regular/TextH";
import { TextHIcon as TextHThinIcon } from "../thin/TextH";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextHThinIcon,
	light: TextHLightIcon,
	regular: TextHRegularIcon,
	bold: TextHBoldIcon,
	fill: TextHFillIcon,
	duotone: TextHDuotoneIcon,
} as const;

export function TextHIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextHIcon as TextH };
