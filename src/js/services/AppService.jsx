import http from "q-io/http"
import { trials } from "utils/API"

function getData() {
	return new Promise((res, rej) => {
		http.read(trials).then(response => {
			try {
				const data = JSON.parse(response)
				res(data)
			}
			catch {
				rej()
			}
		})
	})
}

export { getData }