#!/bin/bash

TARGET_DIR="$1"

if [ -z "$TARGET_DIR" ]; then
    echo "Error: Please provide a path to the folder."
    echo "Example: $0 /home/user/images"
    exit 1
fi

if [ ! -d "$TARGET_DIR" ]; then
    echo "Error: Directory '$TARGET_DIR' not found."
    exit 1
fi

cd "$TARGET_DIR" || exit
for file in *.{png,avif}; do
    [ -e "$file" ] || continue

    filename="${file%.*}"
    extension="${file##*.}"

    case "$extension" in
        avif)
            ffmpeg -i "$file" \
                   -filter_complex "[0:v]alphamerge,format=bgra" \
                   -c:v libwebp_anim -loop 0 -y \
                   -hide_banner -loglevel error \
                   "${filename}.webp"
            ;;
        png)
            ffmpeg -i "$file" -c:v libwebp -lossless 1 -y \
                   -hide_banner -loglevel error \
                   "${filename}.webp"
            ;;
        *)
            ffmpeg -i "$file" -c:v libwebp -q:v 100 -y \
                   -hide_banner -loglevel error \
                   "${filename}.webp"
            ;;
    esac
           
    if [ $? -eq 0 ]; then
        rm "$file"
        echo "Done: $file converted and removed"
    else
        echo "Error: Failed to process $file, source file kept"
    fi
done

echo "Process finished."