import { RadioButtonIcon as RadioButtonBoldIcon } from "../bold/RadioButton";
import { RadioButtonIcon as RadioButtonDuotoneIcon } from "../duotone/RadioButton";
import { RadioButtonIcon as RadioButtonFillIcon } from "../fill/RadioButton";
import { RadioButtonIcon as RadioButtonLightIcon } from "../light/RadioButton";
import { RadioButtonIcon as RadioButtonRegularIcon } from "../regular/RadioButton";
import { RadioButtonIcon as RadioButtonThinIcon } from "../thin/RadioButton";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RadioButtonThinIcon,
	light: RadioButtonLightIcon,
	regular: RadioButtonRegularIcon,
	bold: RadioButtonBoldIcon,
	fill: RadioButtonFillIcon,
	duotone: RadioButtonDuotoneIcon,
} as const;

export function RadioButtonIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RadioButtonIcon as RadioButton };
