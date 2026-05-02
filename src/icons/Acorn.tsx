import { AcornIcon as AcornBoldIcon } from "../bold/Acorn";
import { AcornIcon as AcornDuotoneIcon } from "../duotone/Acorn";
import { AcornIcon as AcornFillIcon } from "../fill/Acorn";
import { AcornIcon as AcornLightIcon } from "../light/Acorn";
import { AcornIcon as AcornRegularIcon } from "../regular/Acorn";
import { AcornIcon as AcornThinIcon } from "../thin/Acorn";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AcornThinIcon,
	light: AcornLightIcon,
	regular: AcornRegularIcon,
	bold: AcornBoldIcon,
	fill: AcornFillIcon,
	duotone: AcornDuotoneIcon,
} as const;

export function AcornIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AcornIcon as Acorn };
