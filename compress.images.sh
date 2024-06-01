

IMAGE_DIR="assets/pet-image"



COMPRESSION_LEVEL=80



IFS=$'\n' MODIFIED_IMAGES=($(git diff --name-only --relative HEAD~1 HEAD | grep -E "^${IMAGE_DIR}/.*\.(jpg|jpeg)$"))



for IMAGE in $MODIFIED_IMAGES; do

  echo "Compressing Image $IMAGE..."

  mogrify -quality $COMPRESSION_LEVEL "$IMAGE"

done

echo "Image Compression Done!"

