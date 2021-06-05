class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    def breadthFirstSearch(self, array: list):
        graph = self
        array.append(self.name)
        queue = [Node(self.name)]

        while queue or graph.children:
            for child in graph.children:
                array.append(child.name)
                queue.append(child)

            graph = queue.pop(0)

        return array
