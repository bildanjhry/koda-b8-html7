$(document).ready(function(){

    const buttonNum = $(".num-btn")
    const buttonOpr = $(".operator-btn")
    const inputField =  $(".input-calc")
    const buttonResult = $("#result")
    const resultField = $(".result-field")
    const buttonClear = $("#clear")

    let valueFirst = 0
    let valueSecond = 0
    let caseOpr = "";

    function handleOperator(opt) {
        console.log(valueFirst)
        console.log(valueSecond)
        switch(opt) {
            case "*":
                const result = parseInt(valueFirst) * parseInt(valueSecond)
                resultField.text(result)
                break;
            case "+":
                break;
            case "-":
                break;
            case "/":
                break;
            case "%":
                break;    
        }
    }


    buttonNum.click(function(){
        const result = $(this).val()
        if(caseOpr) {
            if(valueSecond) valueSecond = 0
            valueSecond += result
        } else {
            valueFirst += result
        }
        const span = $("<span>")
        span.text(result)
        inputField.append(span)
    })
    
    buttonOpr.click(function(){
        const result = $(this).text()
        const valueOpr = $(this).val()
        if(valueFirst && caseOpr && valueSecond){
            const resVal = resultField.text()
            if(resVal){
                valueFirst = resVal
            } else {
              //  handleOperator(valueOpr)
            }
            console.log(resVal)
            //handleOperator(valueOpr)
        } else {

        }
        const span = $("<span>")
        span.addClass("red-color")
        span.text(result)
        caseOpr = valueOpr
        inputField.append(span)
    })

    buttonResult.click(function(){
        handleOperator(caseOpr)
    })

    buttonClear.click(function(){
        valueFirst = 0
        caseOpr = 0
        valueSecond = 0
        inputField.empty()
        resultField.text("")
    })
})