import { FileVideoIcon as FileVideoBoldIcon } from "../bold/FileVideo";
import { FileVideoIcon as FileVideoDuotoneIcon } from "../duotone/FileVideo";
import { FileVideoIcon as FileVideoFillIcon } from "../fill/FileVideo";
import { FileVideoIcon as FileVideoLightIcon } from "../light/FileVideo";
import { FileVideoIcon as FileVideoRegularIcon } from "../regular/FileVideo";
import { FileVideoIcon as FileVideoThinIcon } from "../thin/FileVideo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileVideoThinIcon,
	light: FileVideoLightIcon,
	regular: FileVideoRegularIcon,
	bold: FileVideoBoldIcon,
	fill: FileVideoFillIcon,
	duotone: FileVideoDuotoneIcon,
} as const;

export function FileVideoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileVideoIcon as FileVideo };
