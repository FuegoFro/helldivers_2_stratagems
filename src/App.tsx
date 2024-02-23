import React, { useEffect, useState } from 'react'
import styles from './App.module.css'
import { PrefixNode } from './prefixTrie'
import { Stratagem } from './stratagems'
import StratagemPane from './StratagemPane'
import loginLimitImg from './login_limit.webp'

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
  const [freedomBanner, setFreedomBanner] = useState(false)

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
        case 'f':
          setFreedomBanner(!freedomBanner)
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
  }, [trieRoot, currentDepth, currentNode, freedomBanner])

  const enabled = new Set(currentNode.values)

  if (freedomBanner) {
    return (
      <div className={styles.freedomBannerContainer}>
        <img
          className={styles.freedomBanner}
          src={loginLimitImg}
          alt={'ERROR: Servers at capacity. Please try again later.'}
        />
      </div>
    )
  }

  return (
    <div className={styles.strategemContainer}>
      {stratagems.map((stratagem, idx) => {
        return (
          <StratagemPane
            key={stratagem.name}
            stratagem={stratagem}
            depth={currentDepth}
            enabled={enabled.has(idx)}
          />
        )
      })}
    </div>
  )
}

export default App
