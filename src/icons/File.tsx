import { FileIcon as FileBoldIcon } from "../bold/File";
import { FileIcon as FileDuotoneIcon } from "../duotone/File";
import { FileIcon as FileFillIcon } from "../fill/File";
import { FileIcon as FileLightIcon } from "../light/File";
import { FileIcon as FileRegularIcon } from "../regular/File";
import { FileIcon as FileThinIcon } from "../thin/File";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileThinIcon,
	light: FileLightIcon,
	regular: FileRegularIcon,
	bold: FileBoldIcon,
	fill: FileFillIcon,
	duotone: FileDuotoneIcon,
} as const;

export function FileIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileIcon as File };
