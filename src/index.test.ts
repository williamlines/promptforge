import { helloWorld } from '.'

describe('helloWorld', () => {
    it('should return hello world', () => {
        expect(helloWorld()).toBe('hello world')
    })
})
