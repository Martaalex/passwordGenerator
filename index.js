
const password = document.getElementById('pass1');
const service = document.getElementById('pass2');

const submitBtn = document.getElementById('submit').addEventListener('click', generate);


function generate (){
    const pirmas = password.value;
    const antras = service.value;
 
    const lastLetter = antras[antras.length - 1];
    const firstLetter = antras[0];
    
        let vowel = antras.match(/[aeiou]/gi);

        if(vowel) {
            for (let i=0; i<vowel.length; i++){
       var vowL = vowel[0];
         }
        } else{
            vowL = antras[0];
        }

        let nonVowel = antras.match(/[aeiou]/gi);
        if(nonVowel) {
            var number = (antras.length) - (nonVowel.length);
                } else{
           number = 0;
        }

    const generatedPass = document.getElementById('password');
    generatedPass.textContent = lastLetter + vowL + pirmas + number + firstLetter;

    
    
};

  