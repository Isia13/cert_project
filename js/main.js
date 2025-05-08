const personen = [
	{
	vorname: "Izabela",
	nachname: "Debska-Rosemeier",
	abteilung: "IT",
	nummer: "1135280"		
	},
	{
	vorname: "Tim",
	nachname: "Maus",
	abteilung: "Buchhaltung",
	nummer: "1135540"
	},
	{
	vorname: "Anna",
	nachname: "Maier",
	abteilung: "Assistenz",
	nummer: "1336728"
	},
	{
	vorname: "Hans",
	nachname: "Schmidt",
	abteilung: "PR",
	nummer: "1330920"
	},
	{
	vorname: "Uwe",
	nachname: "Stiller",
	abteilung: "Verwaltung",
	nummer: "1122241"
	},
	{
	vorname: "Marion",
	nachname: "Buche",
	abteilung: "Familienhilfe",
	nummer: "1325652"
	},
	{
	vorname: "Peter",
	nachname: "Hase",
	abteilung: "Fundraising",
	nummer: "1342126"
	}
];

const app = {
	data() {
		return {
			sortierenNach: "nachname",
			personen
		};
	},
	computed: {
		sortiertePersonen() {
			return this.personen.sort((a, b) =>
				a[this.sortierenNach].localeCompare(b[this.sortierenNach])
		);
	}
	}
};
Vue.createApp(app).mount(".tabelle");