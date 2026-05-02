import { PlaylistIcon as PlaylistBoldIcon } from "../bold/Playlist";
import { PlaylistIcon as PlaylistDuotoneIcon } from "../duotone/Playlist";
import { PlaylistIcon as PlaylistFillIcon } from "../fill/Playlist";
import { PlaylistIcon as PlaylistLightIcon } from "../light/Playlist";
import { PlaylistIcon as PlaylistRegularIcon } from "../regular/Playlist";
import { PlaylistIcon as PlaylistThinIcon } from "../thin/Playlist";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PlaylistThinIcon,
	light: PlaylistLightIcon,
	regular: PlaylistRegularIcon,
	bold: PlaylistBoldIcon,
	fill: PlaylistFillIcon,
	duotone: PlaylistDuotoneIcon,
} as const;

export function PlaylistIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PlaylistIcon as Playlist };
