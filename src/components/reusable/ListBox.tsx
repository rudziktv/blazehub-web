import { Component, ComponentType, JSX } from "react";

function ListBox<T>({ source = [], render, separator }: ListBoxProps<T>) {
	return (
		<>
			{source.map((item, i, a) => {
				if (separator && i > 0)
					return (
						<>
							<Component key={`separator=${i}`} />
							{render(item, i, a)}
						</>
					);
				return render(item, i, a);
			})}
		</>
	);
}

interface ListBoxProps<T> {
	source?: Array<T>;
	separator?: ComponentType;
	render: (element: T, index: number, array: Array<T>) => JSX.Element;
}

export default ListBox;
