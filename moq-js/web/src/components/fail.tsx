import { Show } from "solid-js"

export default function Fail(props: { error?: Error }) {
	return (
		<Show when={props.error}>
			{(error) => (
				<div class="my-4 rounded-md bg-red-600 px-4 py-2">
					<span class="font-bold">{error().name}:</span> {error().message}
				</div>
			)}
		</Show>
	)
}
