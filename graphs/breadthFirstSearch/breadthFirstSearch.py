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
        queue = [self.name]

        while queue:
            for child in graph.children:
                array.append(child)
                queue.append(child)
                
            graph = queue.pop(0)
                
        return array
