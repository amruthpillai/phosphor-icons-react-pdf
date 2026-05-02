import { LinkIcon as LinkBoldIcon } from "../bold/Link";
import { LinkIcon as LinkDuotoneIcon } from "../duotone/Link";
import { LinkIcon as LinkFillIcon } from "../fill/Link";
import { LinkIcon as LinkLightIcon } from "../light/Link";
import { LinkIcon as LinkRegularIcon } from "../regular/Link";
import { LinkIcon as LinkThinIcon } from "../thin/Link";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LinkThinIcon,
	light: LinkLightIcon,
	regular: LinkRegularIcon,
	bold: LinkBoldIcon,
	fill: LinkFillIcon,
	duotone: LinkDuotoneIcon,
} as const;

export function LinkIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LinkIcon as Link };
