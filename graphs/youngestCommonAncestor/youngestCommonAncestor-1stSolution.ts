class AncestralTree {
  name: string;
  ancestor: AncestralTree | null;

  constructor(name: string) {
    this.name = name;
    this.ancestor = null;
  }
}

function getAncestors(descendant: AncestralTree) {
	let lastAncestorChildrenren = [descendant]
	let lastAncestor = descendant

	while (lastAncestor.ancestor && lastAncestor.ancestor.ancestor) {
		lastAncestor = lastAncestorChildrenren.slice(-1)[0].ancestor as AncestralTree
		lastAncestorChildrenren.push(lastAncestor)
	}

	return lastAncestorChildrenren
}

// O(d) Time | O(d) Space, where (d) is the depth or height of the ancestral tree
export function getYoungestCommonAncestor(
  topAncestor: AncestralTree,
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree,
) {
	let lastAncestorChildren1 = getAncestors(descendantOne)
	let lastAncestorChildren2 = getAncestors(descendantTwo)
	let lastCommonAncestor = descendantOne
	
	if (lastAncestorChildren1.slice(-1)[0] !== lastAncestorChildren2.slice(-1)[0]) {
		return topAncestor
	} else {
			while(lastAncestorChildren1.slice(-1)[0] === lastAncestorChildren2.slice(-1)[0]) {
				lastCommonAncestor = lastAncestorChildren1.slice(-1)[0]
				lastAncestorChildren1.pop()
				lastAncestorChildren2.pop()
			}
			return lastCommonAncestor
	}
}