cd "/Users/jiayingchen/Desktop/p5mirror---jiaying0822/downloads/../p5projects"
#
echo unzip 1 "ims03-Jiaz-Ym5U14iSN"
rm -rf "./ims03-Jiaz-Ym5U14iSN"
mkdir "./ims03-Jiaz-Ym5U14iSN"
pushd "./ims03-Jiaz-Ym5U14iSN" > /dev/null
unzip -q "../../downloads/zips/ims03-Jiaz-Ym5U14iSN"
popd > /dev/null
#
echo unzip 2 "ims02-Jiaz-HVA8tqvW2"
rm -rf "./ims02-Jiaz-HVA8tqvW2"
mkdir "./ims02-Jiaz-HVA8tqvW2"
pushd "./ims02-Jiaz-HVA8tqvW2" > /dev/null
unzip -q "../../downloads/zips/ims02-Jiaz-HVA8tqvW2"
popd > /dev/null
#
echo unzip 3 "ims01-Jiaz-jYTEhmWCm"
rm -rf "./ims01-Jiaz-jYTEhmWCm"
mkdir "./ims01-Jiaz-jYTEhmWCm"
pushd "./ims01-Jiaz-jYTEhmWCm" > /dev/null
unzip -q "../../downloads/zips/ims01-Jiaz-jYTEhmWCm"
popd > /dev/null

cd ..
# remove redundant p5.js p5.sound.min.js
rm -f p5projects/*/p5.*
# sync last_updatedAt.txt
cd downloads/json
if [ -e pending_updatedAt.txt ]; then
  rm -f last_updatedAt.txt
  mv pending_updatedAt.txt last_updatedAt.txt
fi