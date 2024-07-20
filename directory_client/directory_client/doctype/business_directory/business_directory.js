// Copyright (c) 2023, Mohammed Nasser and contributors
// For license information, please see license.txt
const webSite = cur_frm.doc.website
const logo = cur_frm.doc.company_logo
const picOne = cur_frm.doc.picture_1
const picTwo = cur_frm.doc.picture_2
const picThree = cur_frm.doc.picture_3
const url = `http://${document.location.host}`
const sent = cur_frm.doc.sent
let str = frappe.boot.sitename;
let firstWord = str.split('.')[0];
console.log(firstWord)
console.log(sent)
frappe.ui.form.on('Business Directory', {
	refresh: function (frm) {
		console.log(url)
		frm.add_custom_button(__('Send to Directory'), function () {
			fetch('https://jirlie.com/api/method/directory.api.directory', {
				method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
					jirlie_id: firstWord,
					company_name: cur_frm.doc.company_name,
					company_logo: `${url}${logo}`,
					tagline: cur_frm.doc.tagline,
					company_description: cur_frm.doc.company_description,
					domain: cur_frm.doc.domain,
					company_size: cur_frm.doc.company_size,
					phone_no: cur_frm.doc.phone_no,
					address_line_1: cur_frm.doc.address_line_1,
					address_line_2: cur_frm.doc.address_line_2,
					citytown: cur_frm.doc.citytown,
					stateprovince: cur_frm.doc.stateprovince,
					postal_code: cur_frm.doc.postal_code,
					country: cur_frm.doc.country,
					website: cur_frm.doc.website,
					email: cur_frm.doc.email,
					google_map_iframe: cur_frm.doc.google_map_iframe,
					picture_1: `${url}${picOne}`,
					picture_2: `${url}${picTwo}`,
					picture_3: `${url}${picThree}`,
					currency: cur_frm.doc.currency,
					prodcuts: cur_frm.doc.prodcuts,
					preferred_selling_list: cur_frm.doc.preferred_selling_list,
					preferred_buying_list: cur_frm.doc.preferred_buying_list,
					brief: cur_frm.doc.brief,
					brief_1: cur_frm.doc.brief_1,
					brief_2: cur_frm.doc.brief_2,
					brief_3: cur_frm.doc.brief_3
				})
			}).then(response => response.json())
				.then(data => console.log(data), console.log("DONE"), console.log("DONE2"), frm.set_value('sent', 1), frm.refresh_field('sent'), frm.save(), frappe.msgprint({
					title: __('Welcome to Jirlie Directory'),
					indicator: 'green',
					message: __('Welcome to Jirlie Directory')
				}))
				.catch(error => console.error(error));

		});
	}
});



