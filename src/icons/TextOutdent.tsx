import { TextOutdentIcon as TextOutdentBoldIcon } from "../bold/TextOutdent";
import { TextOutdentIcon as TextOutdentDuotoneIcon } from "../duotone/TextOutdent";
import { TextOutdentIcon as TextOutdentFillIcon } from "../fill/TextOutdent";
import { TextOutdentIcon as TextOutdentLightIcon } from "../light/TextOutdent";
import { TextOutdentIcon as TextOutdentRegularIcon } from "../regular/TextOutdent";
import { TextOutdentIcon as TextOutdentThinIcon } from "../thin/TextOutdent";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextOutdentThinIcon,
	light: TextOutdentLightIcon,
	regular: TextOutdentRegularIcon,
	bold: TextOutdentBoldIcon,
	fill: TextOutdentFillIcon,
	duotone: TextOutdentDuotoneIcon,
} as const;

export function TextOutdentIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextOutdentIcon as TextOutdent };
