from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in directory_client/__init__.py
from directory_client import __version__ as version

setup(
	name="directory_client",
	version=version,
	description="Send Business Informations to Jirlie Directory",
	author="Mohammed Nasser",
	author_email="nasser@nasserx.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
