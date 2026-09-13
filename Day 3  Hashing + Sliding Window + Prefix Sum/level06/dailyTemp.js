const dailyTemperatures = (temperatures) => {

    let stack = []
    let answer = new Array(temperatures.length).fill(0)

    for (let i = 0; i < temperatures.length; i++) {

        while (
            stack.length > 0 &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {

            let previous = stack.pop()

            answer[previous] = i - previous
        }

        stack.push(i)
    }

    return answer
}