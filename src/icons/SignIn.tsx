import { SignInIcon as SignInBoldIcon } from "../bold/SignIn";
import { SignInIcon as SignInDuotoneIcon } from "../duotone/SignIn";
import { SignInIcon as SignInFillIcon } from "../fill/SignIn";
import { SignInIcon as SignInLightIcon } from "../light/SignIn";
import { SignInIcon as SignInRegularIcon } from "../regular/SignIn";
import { SignInIcon as SignInThinIcon } from "../thin/SignIn";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SignInThinIcon,
	light: SignInLightIcon,
	regular: SignInRegularIcon,
	bold: SignInBoldIcon,
	fill: SignInFillIcon,
	duotone: SignInDuotoneIcon,
} as const;

export function SignInIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SignInIcon as SignIn };
