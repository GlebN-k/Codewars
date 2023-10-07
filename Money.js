function calculateYears(principal, interest, tax, desired) {
    let result = principal
    let years = 0

    while (result < desired) {
        result += result * interest - (result * interest * tax)
        ++years
    }

    return years
}