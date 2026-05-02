import { TextboxIcon as TextboxBoldIcon } from "../bold/Textbox";
import { TextboxIcon as TextboxDuotoneIcon } from "../duotone/Textbox";
import { TextboxIcon as TextboxFillIcon } from "../fill/Textbox";
import { TextboxIcon as TextboxLightIcon } from "../light/Textbox";
import { TextboxIcon as TextboxRegularIcon } from "../regular/Textbox";
import { TextboxIcon as TextboxThinIcon } from "../thin/Textbox";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextboxThinIcon,
	light: TextboxLightIcon,
	regular: TextboxRegularIcon,
	bold: TextboxBoldIcon,
	fill: TextboxFillIcon,
	duotone: TextboxDuotoneIcon,
} as const;

export function TextboxIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextboxIcon as Textbox };
