import { prompt } from './prompt'

describe('prompt', () => {
  it('should be defined', () => {
    expect(prompt).toBeDefined()
  })

  it('should return basePrompt when given no options', () => {
    const basePrompt = 'basePrompt'
    expect(prompt(basePrompt)).toBe('basePrompt')
  })

  it('should return basePrompt when given options', () => {
    const basePrompt = 'basePrompt'
    const options = { summarize: true }
    expect(prompt(basePrompt, options)).toBe('basePrompt')
  })
})
