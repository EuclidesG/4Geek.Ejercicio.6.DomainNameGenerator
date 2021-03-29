let word1 = ["The", "Our", "Their"];
let word2 = ["super", "mega", "hyper"];
let word3 = ["websize", "webpage", "internet-page"];

let allWebs = []

    for (var a = 0; a < word1.length; a++) {
        allWebs.push(word1[a] + word2[b] + word3[c])

        for (var b = 0; b < word2.length; b++){
            allWebs.push(word1[a] + word2[b] + word3[c])

            for(var c = 0; c < word3.length; c++) {
                allWebs.push(word1[a] + word2[b] + word3[c])
            }
        }
    }   
console.log(allWebs)


