function takeANumber(deliLine, newName) {
  deliLine.push(newName)
  return `Welcome, ${newName}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine) {
  if (deliLine.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${deliLine.shift()}.`
  }
}

function currentLine(deliLine) {
  if (deliLine.length == 0) {
    return "The line is currently empty."
  } else {
    var lineArray = []
    for (var i = 1; i <= deliLine.length; ++i) {
      lineArray.push(`${i}. ${deliLine[i-1]}`)
    }
    return `The line is currently: ${lineArray.join(", ")}`
  }
}
