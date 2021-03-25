const input = document.getElementById("input")
const result = document.getElementById("result")

input.oninput = e =>  {
    LanguageDetector.detectLanguage(input.value).then(r => {
        result.textContent = JSON.stringify(r, null, 4)
    })
}

LanguageDetector.detectLanguage(input.value).then(r => {
    result.textContent = JSON.stringify(r, null, 4)
})