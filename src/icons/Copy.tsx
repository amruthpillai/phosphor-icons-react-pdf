import { CopyIcon as CopyBoldIcon } from "../bold/Copy";
import { CopyIcon as CopyDuotoneIcon } from "../duotone/Copy";
import { CopyIcon as CopyFillIcon } from "../fill/Copy";
import { CopyIcon as CopyLightIcon } from "../light/Copy";
import { CopyIcon as CopyRegularIcon } from "../regular/Copy";
import { CopyIcon as CopyThinIcon } from "../thin/Copy";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CopyThinIcon,
	light: CopyLightIcon,
	regular: CopyRegularIcon,
	bold: CopyBoldIcon,
	fill: CopyFillIcon,
	duotone: CopyDuotoneIcon,
} as const;

export function CopyIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CopyIcon as Copy };
