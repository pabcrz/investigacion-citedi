import os
import re

# Define the directory containing the exported files
OUTPUT_DIR = "out"

# Function to update <img> tags
def update_img_tags(content):
    # Update image paths to be relative
    content = re.sub(r'src="/main/(.*?)"', r'src="./main/\1"', content)
    content = re.sub(r'src="/public/(.*?)"', r'src="./public/\1"', content)
    return content

# Function to update <link> tags
def update_link_tags(content):
    # Update script and link tags to use relative paths
    content = re.sub(r'href="/_next/', 'href="./_next/', content)
    return content

# Function to update <a> tags for internal pages
def update_internal_a_tags(content):
    # Update href attributes in <a> tags for internal pages only
    content = re.sub(r'href="/([^"]*)"', r'href="/out/\1/index.html"', content)
    return content

# Function to update routes in HTML files
def update_routes_in_html(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        content = file.read()

    # Update specific tags
    content = update_img_tags(content)
    content = update_link_tags(content)
    content = update_internal_a_tags(content)

    # Write the updated content back to the file
    with open(file_path, "w", encoding="utf-8") as file:
        file.write(content)

# Walk through the output directory and process HTML files
for root, _, files in os.walk(OUTPUT_DIR):
    for file in files:
        if file.endswith(".html"):
            file_path = os.path.join(root, file)
            print(f"Updating routes in: {file_path}")
            update_routes_in_html(file_path)

print("Routes updated successfully!")
