import { BookOpenUserIcon as BookOpenUserBoldIcon } from "../bold/BookOpenUser";
import { BookOpenUserIcon as BookOpenUserDuotoneIcon } from "../duotone/BookOpenUser";
import { BookOpenUserIcon as BookOpenUserFillIcon } from "../fill/BookOpenUser";
import { BookOpenUserIcon as BookOpenUserLightIcon } from "../light/BookOpenUser";
import { BookOpenUserIcon as BookOpenUserRegularIcon } from "../regular/BookOpenUser";
import { BookOpenUserIcon as BookOpenUserThinIcon } from "../thin/BookOpenUser";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BookOpenUserThinIcon,
	light: BookOpenUserLightIcon,
	regular: BookOpenUserRegularIcon,
	bold: BookOpenUserBoldIcon,
	fill: BookOpenUserFillIcon,
	duotone: BookOpenUserDuotoneIcon,
} as const;

export function BookOpenUserIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BookOpenUserIcon as BookOpenUser };
