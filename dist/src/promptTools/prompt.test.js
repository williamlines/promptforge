'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const prompt_1 = require('./prompt')
describe('prompt', () => {
  it('should be defined', () => {
    expect(prompt_1.prompt).toBeDefined()
  })
  it('should return basePrompt when given no options', () => {
    const basePrompt = 'basePrompt'
    expect((0, prompt_1.prompt)(basePrompt)).toBe('basePrompt')
  })
  it('should return basePrompt when given options', () => {
    const basePrompt = 'basePrompt'
    const options = { summarize: true }
    expect((0, prompt_1.prompt)(basePrompt, options)).toBe('basePrompt')
  })
})
