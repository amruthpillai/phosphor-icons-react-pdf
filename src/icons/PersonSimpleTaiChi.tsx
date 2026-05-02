import { PersonSimpleTaiChiIcon as PersonSimpleTaiChiBoldIcon } from "../bold/PersonSimpleTaiChi";
import { PersonSimpleTaiChiIcon as PersonSimpleTaiChiDuotoneIcon } from "../duotone/PersonSimpleTaiChi";
import { PersonSimpleTaiChiIcon as PersonSimpleTaiChiFillIcon } from "../fill/PersonSimpleTaiChi";
import { PersonSimpleTaiChiIcon as PersonSimpleTaiChiLightIcon } from "../light/PersonSimpleTaiChi";
import { PersonSimpleTaiChiIcon as PersonSimpleTaiChiRegularIcon } from "../regular/PersonSimpleTaiChi";
import { PersonSimpleTaiChiIcon as PersonSimpleTaiChiThinIcon } from "../thin/PersonSimpleTaiChi";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PersonSimpleTaiChiThinIcon,
	light: PersonSimpleTaiChiLightIcon,
	regular: PersonSimpleTaiChiRegularIcon,
	bold: PersonSimpleTaiChiBoldIcon,
	fill: PersonSimpleTaiChiFillIcon,
	duotone: PersonSimpleTaiChiDuotoneIcon,
} as const;

export function PersonSimpleTaiChiIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PersonSimpleTaiChiIcon as PersonSimpleTaiChi };
