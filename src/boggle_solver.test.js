const findAllSolutions = require("./boggle_solver");

test("Finds all possible solutions", () => {
    expect(findAllSolutions([["A", "B", "C", "D"], ["E", "F", "G", "H"], ["I", "J", "K", "L"], ["A", "B", "C", "D"]], ["ABEF", "AFJIEB", "DGKD", "DGKA"])).toEqual(["ABEF", "AFJIEB", "DGKD"]);
    expect(findAllSolutions([["A", "B"], ["C", "D"]], ["A", "B", "AC", "ACA", "ACB", "DE"])).toEqual(["ACB"]);
    expect(findAllSolutions([["A"], ["B"], ["C"], ["D"]], ["ADBAB", "IUVBWNO"])).toEqual([]);
    expect(findAllSolutions([["T", "W", "Y", "R"], ["E", "N", "P", "H"], ["G", "Z", "QU", "R"], ["O", "N", "T", "A"]], ["ART", "EGO", "GENT", "GET", "NEW", "NET", "NEWT", "PRAT", "PRY", "QUA", "QUART", "QUARTS", "RAT", "TAR", "TARP", "TEN", "WENT", "WET", "ARTY", "EGG", "NOT"])).toEqual(["ART", "EGO", "GENT", "GET", "NEW", "NET", "NEWT", "PRAT", "PRY", "QUA", "QUART", "RAT", "TAR", "TARP", "TEN", "WENT", "WET"].sort());
});