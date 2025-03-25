function predictTIL() {
    const input = document.getElementById('userInput').value;
    if (!input) {
        alert("Please enter some data.");
        return;
    }
    
    let output = Math.random() > 0.5 ? "TIL-Positive" : "TIL-Negative";
    let explanation = output === "TIL-Positive" ? 
        "The model detects significant tumor-infiltrating lymphocytes, indicating a potentially better response to immunotherapy." : 
        "The model detects minimal lymphocyte infiltration, suggesting a different treatment approach might be needed.";
    
    document.getElementById('resultText').innerHTML = `<strong>Prediction:</strong> ${output}<br><br><strong>Explanation:</strong> ${explanation}`;
}