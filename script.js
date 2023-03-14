let questionBox = document.querySelector('#questionBox')
let response = document.querySelector('#response');

let apiKey = `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`


function askDlt() {
    const question = questionBox.value;
    
    fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {

        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: `${question}`,
            temperature: 0.8,
            n: 1,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
            max_tokens: 4000
        })

        

    }).then((response ) => response.json()).then((resp) => {
        response.innerHTML = resp?.choices[0]?.text;
    }).catch((err) => console.log('error on callback', err))    
}

const chatDlt2 = () => {
    const searchBtn = document.querySelector('.search')
    searchBtn.addEventListener('click', async () => {
        const question = questionBox.value
        console.log('clicked')

        if (question.length === 0) {
            // console.log(err)
            response.innerHTML = `Input can't be empty`
            }
            else{
                let fetchResp = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {

            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                prompt: `${question}`,
                temperature: 0.8,
                n: 1,
                top_p: 1,
                frequency_penalty: 0.5,
                presence_penalty: 0,
                max_tokens: 4000
            })
            })

            try{
                let parseJson = await fetchResp.json()
                // console.log(parseJson?.choices[0]?.text)

                response.innerHTML = parseJson?.choices[0]?.text
                
            }
            
            catch(err){

                response.innerHTML = `error catching data`
            }
        } 

        

        
    })
    
} 

chatDlt2()