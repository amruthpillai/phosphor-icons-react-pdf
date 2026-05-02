import { WashingMachineIcon as WashingMachineBoldIcon } from "../bold/WashingMachine";
import { WashingMachineIcon as WashingMachineDuotoneIcon } from "../duotone/WashingMachine";
import { WashingMachineIcon as WashingMachineFillIcon } from "../fill/WashingMachine";
import { WashingMachineIcon as WashingMachineLightIcon } from "../light/WashingMachine";
import { WashingMachineIcon as WashingMachineRegularIcon } from "../regular/WashingMachine";
import { WashingMachineIcon as WashingMachineThinIcon } from "../thin/WashingMachine";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WashingMachineThinIcon,
	light: WashingMachineLightIcon,
	regular: WashingMachineRegularIcon,
	bold: WashingMachineBoldIcon,
	fill: WashingMachineFillIcon,
	duotone: WashingMachineDuotoneIcon,
} as const;

export function WashingMachineIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WashingMachineIcon as WashingMachine };
