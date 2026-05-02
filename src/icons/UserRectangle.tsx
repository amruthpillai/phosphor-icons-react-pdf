import { UserRectangleIcon as UserRectangleBoldIcon } from "../bold/UserRectangle";
import { UserRectangleIcon as UserRectangleDuotoneIcon } from "../duotone/UserRectangle";
import { UserRectangleIcon as UserRectangleFillIcon } from "../fill/UserRectangle";
import { UserRectangleIcon as UserRectangleLightIcon } from "../light/UserRectangle";
import { UserRectangleIcon as UserRectangleRegularIcon } from "../regular/UserRectangle";
import { UserRectangleIcon as UserRectangleThinIcon } from "../thin/UserRectangle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UserRectangleThinIcon,
	light: UserRectangleLightIcon,
	regular: UserRectangleRegularIcon,
	bold: UserRectangleBoldIcon,
	fill: UserRectangleFillIcon,
	duotone: UserRectangleDuotoneIcon,
} as const;

export function UserRectangleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UserRectangleIcon as UserRectangle };
