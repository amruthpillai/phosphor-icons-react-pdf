import { CookieIcon as CookieBoldIcon } from "../bold/Cookie";
import { CookieIcon as CookieDuotoneIcon } from "../duotone/Cookie";
import { CookieIcon as CookieFillIcon } from "../fill/Cookie";
import { CookieIcon as CookieLightIcon } from "../light/Cookie";
import { CookieIcon as CookieRegularIcon } from "../regular/Cookie";
import { CookieIcon as CookieThinIcon } from "../thin/Cookie";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CookieThinIcon,
	light: CookieLightIcon,
	regular: CookieRegularIcon,
	bold: CookieBoldIcon,
	fill: CookieFillIcon,
	duotone: CookieDuotoneIcon,
} as const;

export function CookieIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CookieIcon as Cookie };
