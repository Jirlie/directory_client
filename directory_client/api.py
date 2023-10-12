import frappe

@frappe.whitelist(allow_guest=True)
def testi():
    testi = frappe.db.sql("""select * from `tabTestimonies` where `disabled`=0""", as_dict=True)
    return testi

@frappe.whitelist(allow_guest=True)
def blog():
    blog = frappe.db.sql("""select * from `tabBlog Post` where `published`=1""", as_dict=True)
    site_name = frappe.local.site
    # blog[0]['meta_image'] = f"https://{site_name}" + blog[0].get('meta_image', '')
    for fil in blog:
        fil['site_name'] = f"https://{site_name}"
    if not blog:
        return "No blogs in Framework, Just Ask to add some blogs.", {"alert": "if you see this response you successfully connected to api"}

    return blog

@frappe.whitelist(allow_guest=True)
def blogfilter(name):
    blogfilter = frappe.db.sql("""select * from `tabBlog Post` where `published`=1 and `name` = %s""", name, as_dict=True)
    site_name = frappe.local.site
    blogfilter[0]['meta_image'] = f"https://{site_name}" + blogfilter[0].get('meta_image', '')
    for fil in blogfilter:
        fil['site_name'] = f"https://{site_name}"
    if not blogfilter:
        return "No blogs in Framework, Just Ask to add some blogs.", {"alert": "if you see this response you successfully connected to api"}

    return blogfilter

# @frappe.whitelist(allow_guest=True)
# def products():
#     products = frappe.db.sql("""select * from `tabWebsite Item` where `published`=1""", as_dict=True)
#     return {"site_name": frappe.local.site}, products

@frappe.whitelist(allow_guest=True)
def products():
    products = frappe.db.sql("""select * from `tabWebsite Item` where `published`=1 and `variant_of` is NULL""", as_dict=True)
    site_name = frappe.local.site
    
    # Append site_name to the products dictionary
    for product in products:
        product['site_name'] = f"https://{site_name}"

    return products


@frappe.whitelist(allow_guest=True)
def directory():
    directory = frappe.db.sql("""select * from `tabDirectory`""", as_dict=True)
    site_name = frappe.local.site
    
    # Append site_name to the products dictionary
    for dir in directory:
        dir['site_name'] = f"https://{site_name}"

    return directory

# @frappe.whitelist(allow_guest=True)
# def productsfilter(*args):
#     productsfilter = frappe.db.sql("""select * from `tabWebsite Item` where `published`=1 and %s""", args, as_dict=True)
#     return productsfilter


# @frappe.whitelist(allow_guest=True)
# def productsfilter(column_name, value):
#     # Ensure that the column name is safe to prevent SQL injection

#     # Build the SQL query with proper placeholders
#     sql_query = f"""select * from `tabWebsite Item` where `published`=1 and `{column_name}` = %s"""
    
#     # Execute the query with the provided value
#     productsfilter = frappe.db.sql(sql_query, (value,), as_dict=True)
    
#     return productsfilter

@frappe.whitelist(allow_guest=True)
def productsfilter(column_name1, value1, column_name2=None, value2=None):
    # Ensure that the column name is safe to prevent SQL injection

    # Build the SQL query with proper placeholders
    sql_query = f"""select * from `tabWebsite Item` where `published`=1 and `{column_name1}` = %s"""

    # Check if an additional condition is provided
    if column_name2 and value2:
        sql_query += f" and {column_name2} = %s"
        productsfilter = frappe.db.sql(sql_query, (value1, value2), as_dict=True)
    # Execute the query with the provided value
    else:
        productsfilter = frappe.db.sql(sql_query, (value1,), as_dict=True)
    
    
    return productsfilter

@frappe.whitelist(allow_guest=True)
def contact(first_name, last_name, phone, company, job_title, email, subject, description):
    doc = frappe.new_doc("Issue")
    doc.custom_first_name = first_name
    doc.custom_last_name = last_name
    doc.custom_phone = phone
    doc.custom_company = company
    doc.custom_job_title = job_title
    doc.custom_email = email
    doc.subject = subject
    doc.description = description
    doc.insert(ignore_permissions=True)
    return doc














