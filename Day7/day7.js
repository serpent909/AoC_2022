let fs = require('fs');
let lines = fs.readFileSync('./Day7/input.txt', 'utf8')
lines = lines.split(/\r\n/);

function createTree(lines) {
    const tree = {
        name: '/',
        isDirectory: true,
        children: [],
    };

    let currentNode = tree;
    let currentCommand = null;

    for (const line of lines) {
        if (line[0] === '$') {
            const match = /^\$ (?<command>\w+)(?: (?<arg>.+))?$/.exec(line);
            currentCommand = match.groups.command

            if (currentCommand === 'cd') {
                const target = match.groups.arg
                switch (target) {
                    case '/':
                        currentNode = tree;
                        break;

                    case '..':
                        currentNode = currentNode.parent
                        break;

                    default:
                        currentNode = currentNode.children.find(folder => folder.isDirectory && folder.name === target);
                }
            }

        } else {

            if (currentCommand === 'ls') {
                const fileMatch = /^(?<size>\d+) (?<name>.+)$/.exec(line);
                if (fileMatch) {
                    const node = {
                        name: fileMatch.groups.name,
                        isDirectory: false,
                        parent: currentNode,
                        size: parseInt(fileMatch.groups.size),
                    };
                    currentNode.children.push(node);
                }
                const dirMatch = /^dir (?<name>.+)$/.exec(line);
                if (dirMatch) {
                    const node = {
                        name: dirMatch.groups.name,
                        isDirectory: true,
                        children: [],
                        parent: currentNode,
                    };
                    currentNode.children.push(node);
                }
            } else {
                throw new Error("unknown command")
            }
        }
    }

    return tree;
}

let tree = createTree(lines)
console.dir(tree, {depth:100})




