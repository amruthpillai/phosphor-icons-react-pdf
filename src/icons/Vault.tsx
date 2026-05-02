import { VaultIcon as VaultBoldIcon } from "../bold/Vault";
import { VaultIcon as VaultDuotoneIcon } from "../duotone/Vault";
import { VaultIcon as VaultFillIcon } from "../fill/Vault";
import { VaultIcon as VaultLightIcon } from "../light/Vault";
import { VaultIcon as VaultRegularIcon } from "../regular/Vault";
import { VaultIcon as VaultThinIcon } from "../thin/Vault";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: VaultThinIcon,
	light: VaultLightIcon,
	regular: VaultRegularIcon,
	bold: VaultBoldIcon,
	fill: VaultFillIcon,
	duotone: VaultDuotoneIcon,
} as const;

export function VaultIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { VaultIcon as Vault };
