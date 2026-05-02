import { CameraPlusIcon as CameraPlusBoldIcon } from "../bold/CameraPlus";
import { CameraPlusIcon as CameraPlusDuotoneIcon } from "../duotone/CameraPlus";
import { CameraPlusIcon as CameraPlusFillIcon } from "../fill/CameraPlus";
import { CameraPlusIcon as CameraPlusLightIcon } from "../light/CameraPlus";
import { CameraPlusIcon as CameraPlusRegularIcon } from "../regular/CameraPlus";
import { CameraPlusIcon as CameraPlusThinIcon } from "../thin/CameraPlus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CameraPlusThinIcon,
	light: CameraPlusLightIcon,
	regular: CameraPlusRegularIcon,
	bold: CameraPlusBoldIcon,
	fill: CameraPlusFillIcon,
	duotone: CameraPlusDuotoneIcon,
} as const;

export function CameraPlusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CameraPlusIcon as CameraPlus };
