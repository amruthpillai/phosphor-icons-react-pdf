import { CouchIcon as CouchBoldIcon } from "../bold/Couch";
import { CouchIcon as CouchDuotoneIcon } from "../duotone/Couch";
import { CouchIcon as CouchFillIcon } from "../fill/Couch";
import { CouchIcon as CouchLightIcon } from "../light/Couch";
import { CouchIcon as CouchRegularIcon } from "../regular/Couch";
import { CouchIcon as CouchThinIcon } from "../thin/Couch";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CouchThinIcon,
	light: CouchLightIcon,
	regular: CouchRegularIcon,
	bold: CouchBoldIcon,
	fill: CouchFillIcon,
	duotone: CouchDuotoneIcon,
} as const;

export function CouchIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CouchIcon as Couch };
