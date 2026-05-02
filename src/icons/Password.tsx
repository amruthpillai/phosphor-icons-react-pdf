import { PasswordIcon as PasswordBoldIcon } from "../bold/Password";
import { PasswordIcon as PasswordDuotoneIcon } from "../duotone/Password";
import { PasswordIcon as PasswordFillIcon } from "../fill/Password";
import { PasswordIcon as PasswordLightIcon } from "../light/Password";
import { PasswordIcon as PasswordRegularIcon } from "../regular/Password";
import { PasswordIcon as PasswordThinIcon } from "../thin/Password";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PasswordThinIcon,
	light: PasswordLightIcon,
	regular: PasswordRegularIcon,
	bold: PasswordBoldIcon,
	fill: PasswordFillIcon,
	duotone: PasswordDuotoneIcon,
} as const;

export function PasswordIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PasswordIcon as Password };
