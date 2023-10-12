import frappe

def get_context(context):
    context.companies2 = frappe.get_doc("Business Directory")
    return context