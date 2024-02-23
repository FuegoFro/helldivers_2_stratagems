import App, { Direction, StratagemNode } from './App'
import { useEffect, useMemo, useState } from 'react'
import { STRATAGEMS } from './stratagems'
import { buildPrefixTrie } from './prefixTrie'

function directionsFromCode(code: string): Direction[] {
  return Array.from(code).map((char) => {
    switch (char) {
      case '▲':
        return Direction.UP
      case '►':
        return Direction.RIGHT
      case '▼':
        return Direction.DOWN
      case '◄':
        return Direction.LEFT
      default:
        throw new Error(`Unexpected code char ${char}`)
    }
  })
}

export function AppWrapper() {
  const stratagemsList = useMemo(
    () => STRATAGEMS.flatMap((section) => section.entries),
    [],
  )

  const [trieRoot, setTrieRoot] = useState<StratagemNode | null>(null)
  useEffect(() => {
    const codeIdxPairs = stratagemsList.map(
      (stratagem, idx): [Direction[], number] => [
        directionsFromCode(stratagem.code),
        idx,
      ],
    )
    setTrieRoot(buildPrefixTrie(codeIdxPairs))
  }, [stratagemsList])

  return trieRoot && <App stratagems={stratagemsList} trieRoot={trieRoot} />
}
