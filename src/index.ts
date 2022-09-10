import { readFileSync } from 'fs'
import glob from 'fast-glob'
import plugin from 'tailwindcss/plugin'

interface Options {
  content: string[]
}

export default function (options: Options) {
  return plugin(function (api) {
    const files = glob.sync(options.content)
    const obj = {}

    files.forEach((file) => {
      const content = readFileSync(file, { encoding: 'utf-8' })
      const matches = content.matchAll(/(\.[^\s]+)\s*{/g)

      for (let match of matches) {
        const component = match[1]
        obj[component] = {}
      }
    })

    api.addComponents(obj)
  })
}
