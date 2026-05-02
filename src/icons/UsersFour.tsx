import { UsersFourIcon as UsersFourBoldIcon } from "../bold/UsersFour";
import { UsersFourIcon as UsersFourDuotoneIcon } from "../duotone/UsersFour";
import { UsersFourIcon as UsersFourFillIcon } from "../fill/UsersFour";
import { UsersFourIcon as UsersFourLightIcon } from "../light/UsersFour";
import { UsersFourIcon as UsersFourRegularIcon } from "../regular/UsersFour";
import { UsersFourIcon as UsersFourThinIcon } from "../thin/UsersFour";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UsersFourThinIcon,
	light: UsersFourLightIcon,
	regular: UsersFourRegularIcon,
	bold: UsersFourBoldIcon,
	fill: UsersFourFillIcon,
	duotone: UsersFourDuotoneIcon,
} as const;

export function UsersFourIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UsersFourIcon as UsersFour };
