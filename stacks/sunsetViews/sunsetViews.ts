export enum Direction {
  East = 'EAST',
  West = 'WEST',
}

// O(n) Time | O(n) Space
export function sunsetViews(buildings: number[], direction: Direction) {
  let startingPoint = direction === Direction.West ? 0 : buildings.length - 1
  let endingPoint = startingPoint ? 0 : buildings.length - 1    
  let step = startingPoint ? -1 : 1
  let currentTallestBuilding = 0
  let buildingsWithSunsetView = []

  for (let i = startingPoint; (startingPoint ? i >= endingPoint : i <= endingPoint); i += step) {
    if (buildings[i] > currentTallestBuilding) {
      buildingsWithSunsetView.push(i)
      currentTallestBuilding = buildings[i]
    }
  }

  if (direction === Direction.East) buildingsWithSunsetView.reverse()

  return buildingsWithSunsetView;
}

console.log(sunsetViews([3, 5, 4, 4, 3, 1, 3, 2], Direction.East))