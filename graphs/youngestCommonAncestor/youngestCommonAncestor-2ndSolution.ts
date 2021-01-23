// This is an input class. Do not edit.
class AncestralTree {
  name: string;
  ancestor: AncestralTree | null;

  constructor(name: string) {
    this.name = name;
    this.ancestor = null;
  }
}

// O(d) Time | O(1) Space, where (d) is the depth or height of the ancestral tree
function getDepth(descendant: AncestralTree) {
	let depth = 0
	let lastAncestor = descendant

	while (lastAncestor.ancestor) {
		lastAncestor = lastAncestor.ancestor
		depth++
	}
	return depth
}

export function getYoungestCommonAncestor(
  topAncestor: AncestralTree,
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree,
) {
  let depthDescendantOne = getDepth(descendantOne)
	let depthDescendantTwo = getDepth(descendantTwo)
	let maximumPoint = descendantOne
	let minimumPoint = descendantTwo
	let minimumDepth = depthDescendantTwo
	let maximumDepth = depthDescendantOne
	
	if (Math.max(depthDescendantOne, depthDescendantTwo) === depthDescendantTwo) {
		maximumPoint = descendantTwo
		minimumPoint = descendantOne
		maximumDepth = depthDescendantTwo
		minimumDepth = depthDescendantOne
	}
	
	while (maximumDepth > minimumDepth) {
		maximumDepth--
		if (maximumPoint.ancestor) maximumPoint = maximumPoint.ancestor
	}
	while(maximumPoint !== minimumPoint) {
		if (maximumPoint.ancestor) maximumPoint = maximumPoint.ancestor
		if (minimumPoint.ancestor) minimumPoint = minimumPoint.ancestor
	}

	return maximumPoint
}