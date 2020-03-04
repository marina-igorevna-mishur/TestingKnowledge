import http from "q-io/http"
import { trials } from "utils/API"

function getData() {
	return http.read(trials)
}

export { getData }