
export function convertStringToGrid(string) {
    var grid = []

    for (let i = 0; i < 5; i++){
        grid.push([]);
        for (let j = 0; j < 5; j ++){
            grid[i].push(string[(i * 5) + j]);
        }
    }
    return grid;
}

export default convertStringToGrid;
