function getData() {
	var data = []

	data.push({
		id: 225262,
		title: "An Open Label Pilot Study Evaluating Safety and Evidence of Therapeutic Effect of IV Admin of 2-0, 3-0 Desulfated Heparin, \
		Treatment of Exacerbation of Protein Losing Enteropathy (PLE) Associated With Single Ventricle Palliative Surgery",
		disease: "NA: ClinicalTrials.gov",
		phase: "I"
	})

	return JSON.stringify(data)
}

function filter() {
	var data = ["Trial id", "Title", "Disease", "Trial phase"]

	return JSON.stringify(data)
}

export { getData, filter }