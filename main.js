$(document).ready(function(){

    const buttonNum = $(".num-btn")
    const buttonOpr = $(".operator-btn")
    const inputField =  $(".input-calc")
    const buttonResult = $("#result")
    const resultField = $(".result-field")
    let valueFirst = 0
    let valueSecond = 0
    let caseOpr = "";

    function handleOperator(opt) {
        // let firstVal;
        // if(value) {
        //     firstVal = value
        // }
        switch(opt) {
            case "*":
                const result = parseInt(valueFirst) * parseInt(valueSecond)
                console.log(result)
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
        const span = $("<span>")
        span.addClass("red-color")
        span.text(result)
        caseOpr = valueOpr
        inputField.append(span)
    })

    buttonResult.click(function(){
        console.log("hello")
        handleOperator(caseOpr)
    })
})