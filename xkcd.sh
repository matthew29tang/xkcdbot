if [[ $1 ]]; then
    url=$1
else
    url="https://xkcd.com/"
    number=1
fi
while :; do
    response=$(curl -s $url)
    if [[ ${#response} == 0 ]]; then
        echo "Unable to fetch anything..."
        exit
    fi #https...imgs.xkcd[^']{0,50}(?i)\.(jpg|png|gif)
    contents=$(curl -s $url$number/)
    #echo $url$number/
    #echo $contents | grep -o -P "https...imgs.xkcd[^']{0,50}(?i)\.(jpg|png|gif)" 
    if echo $contents | grep -o -P "https...imgs.xkcd[^']{0,70}(?i)\.(jpg|png|gif)" > /dev/null; then
        number=$((number+1))
        echo "Going to $number"
        echo $contents | grep -o -P "https...imgs.xkcd[^']{0,70}(?i)\.(jpg|png|gif)"  >> comics.txt
    elif [ $number -eq 1838 ]; then
        echo "done"
        break
    fi
#echo "done"
done