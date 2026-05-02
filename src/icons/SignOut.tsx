import { SignOutIcon as SignOutBoldIcon } from "../bold/SignOut";
import { SignOutIcon as SignOutDuotoneIcon } from "../duotone/SignOut";
import { SignOutIcon as SignOutFillIcon } from "../fill/SignOut";
import { SignOutIcon as SignOutLightIcon } from "../light/SignOut";
import { SignOutIcon as SignOutRegularIcon } from "../regular/SignOut";
import { SignOutIcon as SignOutThinIcon } from "../thin/SignOut";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SignOutThinIcon,
	light: SignOutLightIcon,
	regular: SignOutRegularIcon,
	bold: SignOutBoldIcon,
	fill: SignOutFillIcon,
	duotone: SignOutDuotoneIcon,
} as const;

export function SignOutIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SignOutIcon as SignOut };
