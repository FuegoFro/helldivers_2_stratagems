import React, { useEffect, useState } from 'react'
import './App.css'
import { PrefixNode } from './prefixTrie'
import { Stratagem } from './stratagems'
import StratagemPane from './StratagemPane'

export enum Direction {
  UP,
  RIGHT,
  DOWN,
  LEFT,
}
export type StratagemNode = PrefixNode<Direction, number>

interface AppProps {
  stratagems: Stratagem[]
  trieRoot: StratagemNode
}

function App({ stratagems, trieRoot }: AppProps) {
  const [[currentDepth, currentNode], setCurrentNode] = useState<
    [number, StratagemNode]
  >([0, trieRoot])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      let nextDirection = null
      switch (e.key) {
        case 'w':
          nextDirection = Direction.UP
          break
        case 'd':
          nextDirection = Direction.RIGHT
          break
        case 's':
          nextDirection = Direction.DOWN
          break
        case 'a':
          nextDirection = Direction.LEFT
          break
      }
      if (nextDirection != null && currentNode != null) {
        let nextNode = currentNode.children.get(nextDirection)
        if (nextNode == null) {
          setCurrentNode([0, trieRoot])
        } else {
          setCurrentNode([currentDepth + 1, nextNode])
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [trieRoot, currentDepth, currentNode])

  const enabled = new Set(currentNode.values)
  const activated =
    currentNode.values.length === 1 && currentNode.children.size === 0
      ? currentNode.values[0]
      : null

  return (
    <div className="App">
      {stratagems.map((stratagem, idx) => {
        return (
          <StratagemPane
            key={stratagem.name}
            stratagem={stratagem}
            depth={currentDepth}
            enabled={enabled.has(idx)}
            activated={idx === activated}
          />
        )
      })}
    </div>
  )
}

export default App
