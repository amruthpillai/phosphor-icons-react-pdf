import { CashRegisterIcon as CashRegisterBoldIcon } from "../bold/CashRegister";
import { CashRegisterIcon as CashRegisterDuotoneIcon } from "../duotone/CashRegister";
import { CashRegisterIcon as CashRegisterFillIcon } from "../fill/CashRegister";
import { CashRegisterIcon as CashRegisterLightIcon } from "../light/CashRegister";
import { CashRegisterIcon as CashRegisterRegularIcon } from "../regular/CashRegister";
import { CashRegisterIcon as CashRegisterThinIcon } from "../thin/CashRegister";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CashRegisterThinIcon,
	light: CashRegisterLightIcon,
	regular: CashRegisterRegularIcon,
	bold: CashRegisterBoldIcon,
	fill: CashRegisterFillIcon,
	duotone: CashRegisterDuotoneIcon,
} as const;

export function CashRegisterIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CashRegisterIcon as CashRegister };
