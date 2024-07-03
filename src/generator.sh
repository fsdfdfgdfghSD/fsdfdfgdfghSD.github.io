#!/bin/bash
mkdir man_pages

generate_man_page() {
    local command="$1"
    
    if man 1 "$command" &>/dev/null; then
        man 1 "$command" > "man_pages/$command.txt"
        echo "Generated man page for: $command"
    else
        echo "No man page found for: $command"
    fi
}

compgen -c | while read -r command; do
    generate_man_page "$command"
done

echo "All man pages generated and saved in 'man_pages' directory."