/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function DomainGenerator() {

  let word1 = ["The", "Our", "Their"];
  let word2 = ["super", "mega", "hyper"];
  let word3 = ["websize", "webpage", "internet-page"];
  let newURL
  
  for (var a = 0; a = word1.length; a++) {

    for (var b = 0; b = word2.length; b++){

        for(var c = 0; c = word3.length; c++) {

            newURL.push(word1[a] + word2[b] + word3[c])
        }
        newURL.push(word1[a] + word2[b] + word3[c] )
    }
    newURL.push(word1[a] + word2[b] + word3[c] )
} console.log("newURL");
  };


  





