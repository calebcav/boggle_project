function generateTrie(word, node){
    if (!word){
        return;
    }
    word = word.toUpperCase();

    if (word[0] == "Q"){
        if(!("QU" in node)){
            node["QU"] = {"valid": word.length == 1};
        }
        generateTrie(word.slice(2,word.length), node["QU"]);
    }
    else {
        if (!(word[0] in node)){
            node[word[0]] = {"valid": word.length == 1};
        }
        generateTrie(word.slice(1, word.length), node[word[0]]);
    }
}

function buildTrie(words, trie){

    for (var i = 0; i < words.length; i ++){
        if (words[i].length >= 3){
            generateTrie(words[i], trie);
        }
    }
    return trie;
}


function getNeighbors(grid, rows, columns){

    var n = [];
    var neighbors_delta = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1]
    ];
    for (var i = 0; i < neighbors_delta.length; i ++){
        var new_r = rows + neighbors_delta[i][0];
        var new_c = columns + neighbors_delta[i][1];
        if ((new_r >= grid.length) || (new_c >= grid[0].length) || (new_r < 0) || (new_c < 0)){
            continue;
        }
        n.push([new_r, new_c]);
    }
    return n;
}

function DFS(rows, columns, visited, trie, now_word, grid, expected){
    if (visited.includes(`(${rows}, ${columns})`)){
        return;
    }

    var letter = grid[rows][columns];
    visited.push(`(${rows}, ${columns})`);

    if (letter in trie){
        now_word += letter;
        if (trie[letter]["valid"]){
            expected.add(now_word);
        }

        var neighbors = getNeighbors(grid, rows, columns);
        for (var i = 0; i < neighbors.length; i ++){
            var deepCopy = JSON.parse(JSON.stringify(visited));
            DFS(neighbors[i][0], neighbors[i][1], deepCopy, trie[letter], now_word, grid, expected);
        }
    }
}




function findAllSolutions(grid, dictionary){

    var trie_node = {"valid": false};
    trie_node = buildTrie(dictionary, trie_node);
    let set = new Set();
    for (var i = 0; i < grid.length; i ++){
        for (var j = 0; j < grid[i].length; j ++){
            DFS(i, j, [], trie_node, "", grid, set);
        }
    }
    console.log(Array.from(set));
    return (Array.from(set)).sort();
}




export default findAllSolutions;