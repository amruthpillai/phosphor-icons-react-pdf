import type { ComponentType } from "react";
import type { WeightedIconProps } from "./types";

export type IconRegistry = Record<string, ComponentType<WeightedIconProps>>;

export type IconPropsWithName<TName extends string = string> =
	WeightedIconProps & {
		name: TName;
	};

export function createIconComponent<const TIcons extends IconRegistry>(
	icons: TIcons,
) {
	type IconName = keyof TIcons & string;

	return function Icon({
		name,
		weight = "regular",
		...props
	}: IconPropsWithName<IconName>) {
		const Component = icons[name] as ComponentType<WeightedIconProps>;

		return <Component weight={weight} {...props} />;
	};
}
