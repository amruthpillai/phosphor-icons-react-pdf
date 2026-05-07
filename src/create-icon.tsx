import type { ComponentType } from "react";
import type { WeightedIconProps } from "./types";

export type IconRegistry = Record<string, ComponentType<WeightedIconProps>>;

export type IconPropsWithName<TName extends string = string> =
	WeightedIconProps & {
		name: TName;
	};

const hasIcon = <TIcons extends IconRegistry>(
	icons: TIcons,
	name: string,
): name is keyof TIcons & string => Object.keys(icons).includes(name);

export function createIconComponent<const TIcons extends IconRegistry>(
	icons: TIcons,
) {
	type IconName = keyof TIcons & string;

	return function Icon({
		name,
		weight = "regular",
		...props
	}: IconPropsWithName<IconName>) {
		if (!hasIcon(icons, name)) return null;

		const Component = icons[name] as ComponentType<WeightedIconProps>;

		return <Component weight={weight} {...props} />;
	};
}
