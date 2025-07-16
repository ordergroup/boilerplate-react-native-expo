set -e

YARN_VERSION="1.22.22"
YARN_FILE="yarn-${YARN_VERSION}.js"
YARN_DIR=".yarn/releases"
YARN_PATH="${YARN_DIR}/${YARN_FILE}"
DOWNLOAD_URL="https://github.com/yarnpkg/yarn/releases/download/v${YARN_VERSION}/${YARN_FILE}"

echo "🔍 Checking for ${YARN_PATH}..."

if [ -f "${YARN_PATH}" ]; then
    echo "✅ ${YARN_PATH} already exists, skipping download."
else
    echo "⬇️  Downloading Yarn ${YARN_VERSION}..."
    mkdir -p "${YARN_DIR}"
    curl -L "${DOWNLOAD_URL}" -o "${YARN_PATH}"
    echo "✅ Downloaded to ${YARN_PATH}"
fi

YARNRC_FILE=".yarnrc.yml"

if [ -f "${YARNRC_FILE}" ]; then
    echo "✅ ${YARNRC_FILE} already exists, not overwriting."
else
    echo "🪄 Creating ${YARNRC_FILE} with yarnPath..."
    cat <<EOF > "${YARNRC_FILE}"
yarnPath: ${YARN_PATH}
EOF
    echo "✅ Created ${YARNRC_FILE}"
fi

echo "✅ Yarn ${YARN_VERSION} setup completed."
