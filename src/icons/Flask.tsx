import { FlaskIcon as FlaskBoldIcon } from "../bold/Flask";
import { FlaskIcon as FlaskDuotoneIcon } from "../duotone/Flask";
import { FlaskIcon as FlaskFillIcon } from "../fill/Flask";
import { FlaskIcon as FlaskLightIcon } from "../light/Flask";
import { FlaskIcon as FlaskRegularIcon } from "../regular/Flask";
import { FlaskIcon as FlaskThinIcon } from "../thin/Flask";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FlaskThinIcon,
	light: FlaskLightIcon,
	regular: FlaskRegularIcon,
	bold: FlaskBoldIcon,
	fill: FlaskFillIcon,
	duotone: FlaskDuotoneIcon,
} as const;

export function FlaskIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FlaskIcon as Flask };
