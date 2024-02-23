// type PrefixEntry<K, V> = PrefixNode<K, V> | PrefixLeaf<V>

export interface PrefixNode<K, V> {
  type: 'node'
  children: Map<K, PrefixNode<K, V>>
  values: V[]
}

// export interface PrefixLeaf<V> {
//   type: 'leaf'
//   value: V
// }

export function buildPrefixTrie<K, V>(entries: [K[], V][]): PrefixNode<K, V> {
  const root: PrefixNode<K, V> = {
    type: 'node',
    children: new Map(),
    values: [],
  }
  entries.forEach(([keys, value]) => {
    // const prefixKeys = keys.slice(0, -1)
    // const lastKey = keys[-1]

    let current = root
    keys.forEach((k) => {
      current.values.push(value)

      let next = current.children.get(k)
      if (next == null) {
        next = {
          type: 'node',
          children: new Map(),
          values: [],
        }
        current.children.set(k, next)
      }

      current = next
    })

    current.values.push(value)
    if (current.values.length > 1 || current.children.size > 0) {
      console.warn('Unexpected duplicates!', current.values)
    }
  })
  return root
}
