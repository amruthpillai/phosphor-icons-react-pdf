import { UserSquareIcon as UserSquareBoldIcon } from "../bold/UserSquare";
import { UserSquareIcon as UserSquareDuotoneIcon } from "../duotone/UserSquare";
import { UserSquareIcon as UserSquareFillIcon } from "../fill/UserSquare";
import { UserSquareIcon as UserSquareLightIcon } from "../light/UserSquare";
import { UserSquareIcon as UserSquareRegularIcon } from "../regular/UserSquare";
import { UserSquareIcon as UserSquareThinIcon } from "../thin/UserSquare";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UserSquareThinIcon,
	light: UserSquareLightIcon,
	regular: UserSquareRegularIcon,
	bold: UserSquareBoldIcon,
	fill: UserSquareFillIcon,
	duotone: UserSquareDuotoneIcon,
} as const;

export function UserSquareIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UserSquareIcon as UserSquare };
