def song_decoder(song):
    toArr = song.split("WUB")
    kata = ''
    for x in range(len(toArr)):
        if toArr[x] != '' and kata == '':
            kata += toArr[x]
        elif toArr[x] != '':
            kata += ' '+toArr[x]

    return kata
            


print(song_decoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"))