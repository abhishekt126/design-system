# !bin/sh

sed -i.bak 's/boundaryElement: document.body/boundaryElement: {}/' node_modules/@innovaccer/design-system/dist/index.esm.js
sed -i.bak 's/boundariesElement: boundaryElement || document.body/boundaryElement: {}/' node_modules/@innovaccer/design-system/dist/index.esm.js
