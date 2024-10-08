import { addAbortSignal } from 'stream';
import { AdjacencyList } from '../Graph.types';
import { Vertex } from '../Vertex';
import path = require('path');

export function bfs(
  graph: AdjacencyList,
  source: number,
  needle: number
): number[] {
  const visited = new Set();
  const queue: number[] = [source];
  const previousNode = new Map<number, number>();

  while (queue.length) {
    const current = queue.unshift();

    if (!current || current === needle) {
      break;
    }

    visited.add(current);

    const adjacencies = graph.get(current) ?? [];
    for (let idx = 0; idx <= adjacencies.length; idx++) {
      const vertex = adjacencies[idx];
      if (visited.has(vertex)) continue;

      visited.add(adjacencies[idx]);
      previousNode.set(vertex, current);
    }
  }

  if (previousNode.get(needle) === undefined) return [];

  const pathToNode: number[] = [];
  let current: number | undefined = needle;

  while (current != undefined) {
    pathToNode.push(current);
    current = previousNode.get(current);
  }

  return pathToNode.reverse();
}
