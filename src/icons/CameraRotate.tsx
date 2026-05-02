import { CameraRotateIcon as CameraRotateBoldIcon } from "../bold/CameraRotate";
import { CameraRotateIcon as CameraRotateDuotoneIcon } from "../duotone/CameraRotate";
import { CameraRotateIcon as CameraRotateFillIcon } from "../fill/CameraRotate";
import { CameraRotateIcon as CameraRotateLightIcon } from "../light/CameraRotate";
import { CameraRotateIcon as CameraRotateRegularIcon } from "../regular/CameraRotate";
import { CameraRotateIcon as CameraRotateThinIcon } from "../thin/CameraRotate";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CameraRotateThinIcon,
	light: CameraRotateLightIcon,
	regular: CameraRotateRegularIcon,
	bold: CameraRotateBoldIcon,
	fill: CameraRotateFillIcon,
	duotone: CameraRotateDuotoneIcon,
} as const;

export function CameraRotateIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CameraRotateIcon as CameraRotate };
