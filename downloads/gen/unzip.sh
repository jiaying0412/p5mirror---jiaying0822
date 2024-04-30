cd "/Users/jiayingchen/Desktop/p5mirror---jiaying0822/downloads/../p5projects"
#
echo unzip 1 "ims06-Jiaz-D9CuGjBf64"
rm -rf "./ims06-Jiaz-D9CuGjBf64"
mkdir "./ims06-Jiaz-D9CuGjBf64"
pushd "./ims06-Jiaz-D9CuGjBf64" > /dev/null
unzip -q "../../downloads/zips/ims06-Jiaz-D9CuGjBf64"
popd > /dev/null
#
echo unzip 2 "ims06-Jiaz copy-V9OrPafmV"
rm -rf "./ims06-Jiaz copy-V9OrPafmV"
mkdir "./ims06-Jiaz copy-V9OrPafmV"
pushd "./ims06-Jiaz copy-V9OrPafmV" > /dev/null
unzip -q "../../downloads/zips/ims06-Jiaz copy-V9OrPafmV"
popd > /dev/null
#
echo unzip 3 "ims05-Jiaz-ONt2F3M9G"
rm -rf "./ims05-Jiaz-ONt2F3M9G"
mkdir "./ims05-Jiaz-ONt2F3M9G"
pushd "./ims05-Jiaz-ONt2F3M9G" > /dev/null
unzip -q "../../downloads/zips/ims05-Jiaz-ONt2F3M9G"
popd > /dev/null
#
echo unzip 4 "WebGL test-UYO_y6cn6V"
rm -rf "./WebGL test-UYO_y6cn6V"
mkdir "./WebGL test-UYO_y6cn6V"
pushd "./WebGL test-UYO_y6cn6V" > /dev/null
unzip -q "../../downloads/zips/WebGL test-UYO_y6cn6V"
popd > /dev/null
#
echo unzip 5 "ims04-Jiaz-iBJS9wAbf"
rm -rf "./ims04-Jiaz-iBJS9wAbf"
mkdir "./ims04-Jiaz-iBJS9wAbf"
pushd "./ims04-Jiaz-iBJS9wAbf" > /dev/null
unzip -q "../../downloads/zips/ims04-Jiaz-iBJS9wAbf"
popd > /dev/null
#
echo unzip 6 "ims05-Jiaz-yTBe3nOh0"
rm -rf "./ims05-Jiaz-yTBe3nOh0"
mkdir "./ims05-Jiaz-yTBe3nOh0"
pushd "./ims05-Jiaz-yTBe3nOh0" > /dev/null
unzip -q "../../downloads/zips/ims05-Jiaz-yTBe3nOh0"
popd > /dev/null
#
echo unzip 7 "ims02-Jiaz-HVA8tqvW2"
rm -rf "./ims02-Jiaz-HVA8tqvW2"
mkdir "./ims02-Jiaz-HVA8tqvW2"
pushd "./ims02-Jiaz-HVA8tqvW2" > /dev/null
unzip -q "../../downloads/zips/ims02-Jiaz-HVA8tqvW2"
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