// var directory = frappe.db.get_single_value("Business Directory", "completed");


// function getnote() {
//     console.log("test")
//     if (!directory) {
//         frappe.msgprint('Please Complete Jirlie Business Directory Setup From <a href="/app/business-directory/Business%20Directory">Here</a>');
//         console.log("test")
//     }
// }

// getnote()

document.addEventListener("DOMContentLoaded", function () {
    console.log("Page fully loaded2");
    console.log("test7")
    frappe.call({
        method: "frappe.client.get",
        args: {
            doctype: "Business Directory",
        },
        callback(r) {
            if (r.message) {
                done = r.message;
                console.log(done.completed);
                if (done.completed === 0) {
                    frappe.msgprint('Please Complete Jirlie Business Directory Setup From <a href="/app/business-directory/Business%20Directory">Here</a>');
                    console.log("not completed")
                } else if (done.sent === 0) {
                    frappe.msgprint('Your Business Directory Data Not Sent Yet, Please Send It From <a href="/app/business-directory/Business%20Directory">Here</a>');
                }
            }
        }
    });

    // const directory = frappe.get_doc("Business Directory", "completed");
    // console.log(directory)
    // if (directory == 0) {
    //     frappe.msgprint('Please Complete Jirlie Business Directory Setup From <a href="/app/business-directory/Business%20Directory">Here</a>');
    //     console.log("test2")
    // }
})