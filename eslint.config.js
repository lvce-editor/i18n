import * as config from '@lvce-editor/eslint-config'
import * as actions from '@lvce-editor/eslint-plugin-github-actions'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  ...config.default,
  ...actions.default,
  {
    rules: {
      'github-actions/ci-versions': 'off', // TODO
    },
  },
  {
    ignores: ['src/index.d.ts'],
  },
])
