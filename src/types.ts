import type { Svg } from "@react-pdf/renderer";
import type { ComponentProps } from "react";

export const iconWeights = [
	"thin",
	"light",
	"regular",
	"bold",
	"fill",
	"duotone",
] as const;

export type IconWeight = (typeof iconWeights)[number];

export type IconProps = Omit<
	ComponentProps<typeof Svg>,
	"children" | "height" | "viewBox" | "width"
> & {
	color?: string;
	size?: number | string;
	[key: string]: unknown;
};

export type WeightedIconProps = IconProps & {
	weight?: IconWeight;
};
