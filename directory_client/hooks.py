from . import __version__ as app_version

app_name = "directory_client"
app_title = "Directory Client"
app_publisher = "Mohammed Nasser"
app_description = "Send Business Informations to Jirlie Directory"
app_email = "nasser@nasserx.com"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/directory_client/css/directory_client.css"
app_include_js = "/assets/directory_client/js/note.js"

# include js, css files in header of web template
# web_include_css = "/assets/directory_client/css/directory_client.css"
# web_include_js = "/assets/directory_client/js/directory_client.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "directory_client/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
#	"methods": "directory_client.utils.jinja_methods",
#	"filters": "directory_client.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "directory_client.install.before_install"
# after_install = "directory_client.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "directory_client.uninstall.before_uninstall"
# after_uninstall = "directory_client.uninstall.after_uninstall"

# Integration Setup
# ------------------
# To set up dependencies/integrations with other apps
# Name of the app being installed is passed as an argument

# before_app_install = "directory_client.utils.before_app_install"
# after_app_install = "directory_client.utils.after_app_install"

# Integration Cleanup
# -------------------
# To clean up dependencies/integrations with other apps
# Name of the app being uninstalled is passed as an argument

# before_app_uninstall = "directory_client.utils.before_app_uninstall"
# after_app_uninstall = "directory_client.utils.after_app_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "directory_client.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
#	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
#	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
#	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
#	"*": {
#		"on_update": "method",
#		"on_cancel": "method",
#		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
#	"all": [
#		"directory_client.tasks.all"
#	],
#	"daily": [
#		"directory_client.tasks.daily"
#	],
#	"hourly": [
#		"directory_client.tasks.hourly"
#	],
#	"weekly": [
#		"directory_client.tasks.weekly"
#	],
#	"monthly": [
#		"directory_client.tasks.monthly"
#	],
# }

# Testing
# -------

# before_tests = "directory_client.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
#	"frappe.desk.doctype.event.event.get_events": "directory_client.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
#	"Task": "directory_client.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["directory_client.utils.before_request"]
# after_request = ["directory_client.utils.after_request"]

# Job Events
# ----------
# before_job = ["directory_client.utils.before_job"]
# after_job = ["directory_client.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
#	{
#		"doctype": "{doctype_1}",
#		"filter_by": "{filter_by}",
#		"redact_fields": ["{field_1}", "{field_2}"],
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_2}",
#		"filter_by": "{filter_by}",
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_3}",
#		"strict": False,
#	},
#	{
#		"doctype": "{doctype_4}"
#	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
#	"directory_client.auth.validate"
# ]

# on_session_creation = "directory_client.api.check_setup"

# on_logout = "directory_client.api.check_setup"