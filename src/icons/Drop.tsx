import { DropIcon as DropBoldIcon } from "../bold/Drop";
import { DropIcon as DropDuotoneIcon } from "../duotone/Drop";
import { DropIcon as DropFillIcon } from "../fill/Drop";
import { DropIcon as DropLightIcon } from "../light/Drop";
import { DropIcon as DropRegularIcon } from "../regular/Drop";
import { DropIcon as DropThinIcon } from "../thin/Drop";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DropThinIcon,
	light: DropLightIcon,
	regular: DropRegularIcon,
	bold: DropBoldIcon,
	fill: DropFillIcon,
	duotone: DropDuotoneIcon,
} as const;

export function DropIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DropIcon as Drop };
